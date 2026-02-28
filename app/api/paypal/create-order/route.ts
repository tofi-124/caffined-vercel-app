import { NextRequest, NextResponse } from 'next/server'

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!
const PAYPAL_API_BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com'

async function getPayPalAccessToken(): Promise<string> {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64')

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // ---- Cart-based checkout (new) ----
    if (body.cartItems && Array.isArray(body.cartItems)) {
      const { cartItems, shippingCost, totalPrice: clientTotal, shippingAddress } = body

      if (!cartItems.length) {
        return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
      }

      const parsedTotal = parseFloat(clientTotal)
      if (isNaN(parsedTotal) || parsedTotal <= 0) {
        return NextResponse.json({ error: 'Invalid total price' }, { status: 400 })
      }

      // Server-side verify the total
      const itemsTotal = cartItems.reduce(
        (sum: number, i: { priceUSD: number; quantity: number }) => sum + i.priceUSD * i.quantity,
        0
      )
      const serverTotal = itemsTotal + (shippingCost || 0)
      // Allow $0.02 tolerance for floating point
      if (Math.abs(serverTotal - parsedTotal) > 0.02) {
        console.error('Price mismatch:', { serverTotal, clientTotal: parsedTotal })
        return NextResponse.json({ error: 'Price verification failed' }, { status: 400 })
      }

      const accessToken = await getPayPalAccessToken()

      const description = cartItems
        .map((i: { productName: string; weight: string; quantity: number }) =>
          `${i.productName} ${i.weight} x${i.quantity}`
        )
        .join(', ')

      const orderPayload: Record<string, unknown> = {
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: `cart-${Date.now()}`,
            description: description.slice(0, 127), // PayPal max 127 chars
            custom_id: JSON.stringify({
              cartItems: cartItems.map((i: { productId: string; weight: string; quantity: number }) => ({
                id: i.productId,
                w: i.weight,
                q: i.quantity,
              })),
              email: shippingAddress?.email || '',
              name: shippingAddress?.fullName || '',
            }).slice(0, 256), // PayPal max 256 chars
            amount: {
              currency_code: 'USD',
              value: parsedTotal.toFixed(2),
              breakdown: {
                item_total: { currency_code: 'USD', value: itemsTotal.toFixed(2) },
                shipping: { currency_code: 'USD', value: (shippingCost || 0).toFixed(2) },
              },
            },
            items: cartItems.map((i: { productName: string; weight: string; priceUSD: number; quantity: number }) => ({
              name: `${i.productName} - ${i.weight} Sample`.slice(0, 127),
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
        // Tell PayPal to use the address we provide — prevents asking the buyer again
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
    const { productId, productName, sampleWeight, samplePrice, buyerEmail, buyerName } = body

    // Validate required fields
    if (!productId || !productName || !sampleWeight || !samplePrice) {
      return NextResponse.json(
        { error: 'Missing required fields: productId, productName, sampleWeight, samplePrice' },
        { status: 400 }
      )
    }

    // Validate price is a positive number
    const price = parseFloat(samplePrice)
    if (isNaN(price) || price <= 0) {
      return NextResponse.json(
        { error: 'Invalid sample price' },
        { status: 400 }
      )
    }

    const accessToken = await getPayPalAccessToken()

    const totalPrice = price

    const orderPayload: Record<string, unknown> = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: `sample-${productId}-${Date.now()}`,
          description: `${productName} Coffee Sample ${sampleWeight}`,
          custom_id: JSON.stringify({
            productId,
            sampleWeight,
            buyerEmail: buyerEmail || '',
            buyerName: buyerName || '',
          }),
          amount: {
            currency_code: 'USD',
            value: totalPrice.toFixed(2),
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
