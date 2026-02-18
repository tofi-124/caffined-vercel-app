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
    const { productId, productName, sampleWeight, samplePrice, buyerEmail, buyerName, shippingAddress } = body

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

    const SHIPPING_COST = 25.00
    const totalPrice = price + SHIPPING_COST

    const orderPayload: Record<string, unknown> = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: `sample-${productId}-${Date.now()}`,
          description: `${productName} Coffee Sample - ${sampleWeight}`,
          custom_id: JSON.stringify({
            productId,
            sampleWeight,
            buyerEmail: buyerEmail || '',
            buyerName: buyerName || '',
          }),
          amount: {
            currency_code: 'USD',
            value: totalPrice.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: price.toFixed(2),
              },
              shipping: {
                currency_code: 'USD',
                value: SHIPPING_COST.toFixed(2),
              },
            },
          },
          items: [
            {
              name: `${productName} - Green Coffee Sample`,
              description: `${sampleWeight} sample of ${productName} Ethiopian green coffee beans for cupping/evaluation`,
              quantity: '1',
              unit_amount: {
                currency_code: 'USD',
                value: price.toFixed(2),
              },
              category: 'PHYSICAL_GOODS',
            },
          ],
        },
      ],
      payment_source: {
        paypal: {
          experience_context: {
            brand_name: 'Ethio Coffee',
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.ethiocoffee.co'}/product/${productId}?sample=success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.ethiocoffee.co'}/product/${productId}?sample=cancelled`,
          },
        },
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
