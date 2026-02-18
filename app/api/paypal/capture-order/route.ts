import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!
const PAYPAL_API_BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL || 'coffee@ethiocoffee.co'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ethiocoffee.co'

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
    throw new Error('Failed to authenticate with PayPal')
  }

  const data = await response.json()
  return data.access_token
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderID, productId, productName, sampleWeight, samplePrice } = body

    if (!orderID) {
      return NextResponse.json(
        { error: 'Missing orderID' },
        { status: 400 }
      )
    }

    const accessToken = await getPayPalAccessToken()

    // Capture the PayPal order
    const captureResponse = await fetch(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!captureResponse.ok) {
      const errorData = await captureResponse.text()
      console.error('PayPal capture error:', errorData)
      return NextResponse.json(
        { error: 'Failed to capture PayPal payment' },
        { status: 500 }
      )
    }

    const captureData = await captureResponse.json()

    // Extract order details
    const purchaseUnit = captureData.purchase_units?.[0]
    const capture = purchaseUnit?.payments?.captures?.[0]
    const customData = purchaseUnit?.custom_id ? JSON.parse(purchaseUnit.custom_id) : {}

    // Use client-provided product info (primary) with custom_id as fallback
    const coffeeName = productName || customData.productId?.toUpperCase() || 'N/A'
    const coffeeId = productId || customData.productId || 'N/A'
    const weight = sampleWeight || customData.sampleWeight || 'N/A'
    const price = samplePrice || 'N/A'

    const payerEmail = captureData.payer?.email_address || customData.buyerEmail || 'N/A'
    const payerName = captureData.payer?.name
      ? `${captureData.payer.name.given_name} ${captureData.payer.name.surname}`
      : customData.buyerName || 'N/A'
    const shippingAddress = purchaseUnit?.shipping?.address

    // Send notification email to Ethio Coffee team
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `☕ New Sample Order Paid - ${coffeeName} ${weight}`,
        html: `
          <h2>New Sample Order - Payment Confirmed</h2>
          <hr />
          <h3>Order Details</h3>
          <p><strong>PayPal Order ID:</strong> ${orderID}</p>
          <p><strong>PayPal Capture ID:</strong> ${capture?.id || 'N/A'}</p>
          <p><strong>Amount Paid:</strong> $${capture?.amount?.value || 'N/A'} ${capture?.amount?.currency_code || 'USD'}</p>
          <p><strong>Payment Status:</strong> ${capture?.status || captureData.status}</p>
          
          <h3>Product</h3>
          <p><strong>Coffee:</strong> ${coffeeName}</p>
          <p><strong>Sample Size:</strong> ${weight}</p>
          <p><strong>Sample Price:</strong> $${typeof price === 'number' ? price.toFixed(2) : price} USD (+ $25.00 shipping)</p>
          
          <h3>Buyer Information</h3>
          <p><strong>Name:</strong> ${payerName}</p>
          <p><strong>Email:</strong> ${payerEmail}</p>
          ${shippingAddress ? `
            <h3>Shipping Address</h3>
            <p>${shippingAddress.address_line_1 || ''}</p>
            ${shippingAddress.address_line_2 ? `<p>${shippingAddress.address_line_2}</p>` : ''}
            <p>${shippingAddress.admin_area_2 || ''}, ${shippingAddress.admin_area_1 || ''} ${shippingAddress.postal_code || ''}</p>
            <p>${shippingAddress.country_code || ''}</p>
          ` : '<p><em>No shipping address provided - follow up with buyer</em></p>'}
          
          <hr />
          <p style="color: #666; font-size: 12px;">This is an automated notification from ethiocoffee.co sample ordering system.</p>
        `,
      })
    } catch (emailError) {
      // Don't fail the payment capture if email fails
      console.error('Failed to send sample order notification email:', emailError)
    }

    // Send confirmation email to buyer
    if (payerEmail && payerEmail !== 'N/A') {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: payerEmail,
          subject: `Your Ethio Coffee Sample Order Confirmation`,
          html: `
            <h2>Thank you for your sample order!</h2>
            <p>Hi ${payerName},</p>
            <p>We've received your payment and your coffee sample is being prepared for shipment.</p>
            
            <h3>Order Summary</h3>
            <p><strong>Coffee:</strong> ${coffeeName}</p>
            <p><strong>Sample Size:</strong> ${weight}</p>
            <p><strong>Amount Paid:</strong> $${capture?.amount?.value || 'N/A'} USD</p>
            <p><strong>Order Reference:</strong> ${orderID}</p>
            
            <p>We'll ship your sample within 2-3 business days and send you tracking information once available.</p>
            
            <p>If you have any questions, feel free to reply to this email or contact us at coffee@ethiocoffee.co.</p>
            
            <p>Best regards,<br/>The Ethio Coffee Team</p>
            
            <hr />
            <p style="color: #666; font-size: 12px;">Ethio Coffee Export PLC | Addis Ababa, Ethiopia | ethiocoffee.co</p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send buyer confirmation email:', emailError)
      }
    }

    return NextResponse.json({
      status: captureData.status,
      orderId: orderID,
      captureId: capture?.id,
      payerEmail,
      payerName,
    })
  } catch (error) {
    console.error('Error capturing PayPal order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
