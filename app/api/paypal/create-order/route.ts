import { NextRequest, NextResponse } from 'next/server'
import { offerings } from '../../../data/offerings'
import { rateLimit, getClientIp } from '../../../lib/rate-limit'
import { truncate } from '../../../lib/sanitize'
import { getShippingRate } from '../../../lib/dhl'
import type { SampleOption } from '../../../data/offerings'

const PAYPAL_API_BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com'

async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials not configured')
  }
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  if (!response.ok) {
    const errorData = await response.text()
    console.error('PayPal auth error:', errorData)
    throw new Error('Failed to authenticate with PayPal')
  }

  const data = await response.json()
  return data.access_token
}

function getVerifiedSampleOption(productId: string, weight: string): {
  option: SampleOption | null
  error?: string
} {
  const product = offerings.find(o => o.id === productId)
  if (!product) {
    return { option: null, error: `Product not found: ${productId}` }
  }
  if (product.isSoldOut || product.isContracted) {
    return { option: null, error: `Samples are unavailable for this coffee: ${product.name}` }
  }
  const option = product.pricing.sampleOptions.find(s => s.weight === weight)
  if (!option) {
    return { option: null, error: `Sample option not found: ${productId} ${weight}` }
  }
  return { option }
}

export async function POST(request: NextRequest) {
  // Guard: ensure PayPal credentials are configured
  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
    console.error('PayPal credentials not configured')
    return NextResponse.json({ error: 'Payment service unavailable' }, { status: 503 })
  }

  // Rate limit: 20 order creations per IP per minute
  const ip = getClientIp(request)
  const { allowed } = rateLimit(`paypal-create:${ip}`, 20, 60_000)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  try {
    const body = await request.json()

    // ---- Cart-based checkout (new) ----
    if (body.cartItems && Array.isArray(body.cartItems)) {
      const { cartItems, shippingCost, totalPrice: clientTotal, shippingAddress } = body

      if (!cartItems.length) {
        return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
      }

      // Server-side price verification against catalog
      const verifiedItems: Array<{
        productId: string
        productName: string
        weight: string
        weightGrams: number
        priceUSD: number
        quantity: number
      }> = []

      for (const item of cartItems) {
        if (!item.productId || !item.weight || !item.quantity || item.quantity <= 0) {
          return NextResponse.json({ error: `Invalid cart item: ${item.productId || 'unknown'}` }, { status: 400 })
        }

        const { option, error } = getVerifiedSampleOption(item.productId, item.weight)
        if (!option) {
          return NextResponse.json(
            { error: error || `Product or sample option not found: ${item.productId} ${item.weight}` },
            { status: 400 }
          )
        }
        const product = offerings.find(o => o.id === item.productId)!

        verifiedItems.push({
          productId: item.productId,
          productName: product.name,
          weight: option.weight,
          weightGrams: option.weightGrams,
          priceUSD: option.priceUSD,
          quantity: Math.min(Math.floor(item.quantity), 50), // Cap at 50 per item
        })
      }

      const itemsTotal = verifiedItems.reduce(
        (sum, i) => sum + i.priceUSD * i.quantity,
        0
      )
      const parsedShipping = parseFloat(shippingCost) || 0

      // Server-side shipping cost verification against DHL / flat-rate
      if (parsedShipping > 0 && shippingAddress?.countryCode) {
        const totalWeightGrams = verifiedItems.reduce((sum, i) => sum + i.weightGrams * i.quantity, 0)
        try {
          const serverRate = await getShippingRate({
            countryCode: shippingAddress.countryCode,
            cityName: shippingAddress.city || '',
            postalCode: shippingAddress.postalCode || '',
            weightGrams: totalWeightGrams,
          })
          // Reject if client shipping is more than $1 below the server-calculated rate
          if (parsedShipping < serverRate.totalPrice - 1.00) {
            console.error('Shipping cost mismatch:', { clientShipping: parsedShipping, serverShipping: serverRate.totalPrice })
            return NextResponse.json({ error: 'Shipping cost verification failed. Please refresh and try again.' }, { status: 400 })
          }
        } catch (err) {
          // If DHL call fails, log but allow order to proceed (flat-rate was already shown to user)
          console.warn('Shipping verification failed, proceeding with client-provided cost:', err)
        }
      }

      const serverTotal = itemsTotal + parsedShipping

      // Validate client total matches server total (allow $0.02 tolerance for float rounding)
      const parsedClientTotal = parseFloat(clientTotal)
      if (isNaN(parsedClientTotal) || parsedClientTotal <= 0) {
        return NextResponse.json({ error: 'Invalid total price' }, { status: 400 })
      }
      if (Math.abs(serverTotal - parsedClientTotal) > 0.02) {
        console.error('Price mismatch:', { serverTotal, clientTotal: parsedClientTotal })
        return NextResponse.json({ error: 'Price verification failed. Please refresh and try again.' }, { status: 400 })
      }

      const accessToken = await getPayPalAccessToken()

      const description = verifiedItems
        .map(i => `${i.productName} ${i.weight} x${i.quantity}`)
        .join(', ')

      const orderPayload: Record<string, unknown> = {
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: `cart-${Date.now()}`,
            description: truncate(description, 127),
            custom_id: truncate(JSON.stringify({
              cartItems: verifiedItems.map(i => ({
                id: i.productId,
                w: i.weight,
                q: i.quantity,
              })),
              email: shippingAddress?.email || '',
              name: shippingAddress?.fullName || '',
            }), 256),
            amount: {
              currency_code: 'USD',
              value: serverTotal.toFixed(2),
              breakdown: {
                item_total: { currency_code: 'USD', value: itemsTotal.toFixed(2) },
                shipping: { currency_code: 'USD', value: parsedShipping.toFixed(2) },
              },
            },
            items: verifiedItems.map(i => ({
              name: truncate(`${i.productName} - ${i.weight} Sample`, 127),
              quantity: String(i.quantity),
              unit_amount: { currency_code: 'USD', value: i.priceUSD.toFixed(2) },
              category: 'PHYSICAL_GOODS',
            })),
            ...(shippingAddress ? {
              shipping: {
                name: { full_name: shippingAddress.fullName || '' },
                address: {
                  address_line_1: shippingAddress.addressLine1 || '',
                  ...(shippingAddress.addressLine2 ? { address_line_2: shippingAddress.addressLine2 } : {}),
                  admin_area_2: shippingAddress.city || '',
                  admin_area_1: shippingAddress.state || '',
                  postal_code: shippingAddress.postalCode || '',
                  country_code: shippingAddress.countryCode || 'US',
                },
              },
            } : {}),
          },
        ],
        application_context: {
          shipping_preference: shippingAddress ? 'SET_PROVIDED_ADDRESS' : 'GET_FROM_FILE',
        },
      }

      const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('PayPal create order error (cart):', errorData)
        return NextResponse.json({ error: 'Failed to create PayPal order' }, { status: 500 })
      }

      const orderData = await response.json()
      return NextResponse.json({ id: orderData.id, status: orderData.status })
    }

    // ---- Legacy single-item checkout ----
    const { productId, productName, sampleWeight } = body

    // Validate required fields
    if (!productId || !productName || !sampleWeight) {
      return NextResponse.json(
        { error: 'Missing required fields: productId, productName, sampleWeight' },
        { status: 400 }
      )
    }

    // Server-side price lookup — never trust client-supplied price
    const { option, error } = getVerifiedSampleOption(productId, sampleWeight)
    if (!option) {
      return NextResponse.json(
        { error: error || `Product or sample option not found: ${productId} ${sampleWeight}` },
        { status: 400 }
      )
    }

    const accessToken = await getPayPalAccessToken()

    const orderPayload: Record<string, unknown> = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: `sample-${productId}-${Date.now()}`,
          description: `${productName} Coffee Sample ${sampleWeight}`,
          custom_id: truncate(JSON.stringify({
            productId,
            sampleWeight,
            buyerEmail: body.buyerEmail || '',
            buyerName: body.buyerName || '',
          }), 256),
          amount: {
            currency_code: 'USD',
            value: option.priceUSD.toFixed(2),
          },
        },
      ],
    }

    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderPayload),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('PayPal create order error:', errorData)
      return NextResponse.json(
        { error: 'Failed to create PayPal order' },
        { status: 500 }
      )
    }

    const orderData = await response.json()

    return NextResponse.json({
      id: orderData.id,
      status: orderData.status,
    })
  } catch (error) {
    console.error('Error creating PayPal order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
