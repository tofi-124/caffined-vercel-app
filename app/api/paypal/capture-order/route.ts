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
    const { orderID } = body

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

    const payerEmail = captureData.payer?.email_address || customData.email || body.shippingAddress?.email || 'N/A'
    const payerName = captureData.payer?.name
      ? `${captureData.payer.name.given_name} ${captureData.payer.name.surname}`
      : customData.name || body.shippingAddress?.fullName || 'N/A'

    // Determine if this is a cart order or legacy single-item order
    const isCartOrder = Boolean(body.cartItems)
    const cartItems = body.cartItems || []
    const shippingCost = body.shippingCost || 0
    const shippingAddr = body.shippingAddress || purchaseUnit?.shipping?.address
    const orderNotes = body.orderNotes || ''

    // Build items summary for emails
    let itemsSummaryHtml = ''
    let emailSubject = ''

    if (isCartOrder && cartItems.length > 0) {
      emailSubject = `New Sample Order (${cartItems.length} item${cartItems.length > 1 ? 's' : ''}) - Paid`
      itemsSummaryHtml = `
        <h3>Items Ordered</h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="border-bottom:1px solid #eee;">
            <th style="text-align:left;padding:6px 8px;">Coffee</th>
            <th style="text-align:center;padding:6px 8px;">Size</th>
            <th style="text-align:center;padding:6px 8px;">Qty</th>
            <th style="text-align:right;padding:6px 8px;">Price</th>
          </tr>
          ${cartItems.map((i: { productName: string; weight: string; quantity: number; priceUSD: number }) => `
            <tr style="border-bottom:1px solid #f5f5f5;">
              <td style="padding:6px 8px;">${i.productName}</td>
              <td style="text-align:center;padding:6px 8px;">${i.weight}</td>
              <td style="text-align:center;padding:6px 8px;">${i.quantity}</td>
              <td style="text-align:right;padding:6px 8px;">$${(i.priceUSD * i.quantity).toFixed(2)}</td>
            </tr>
          `).join('')}
          <tr style="border-top:2px solid #ddd;">
            <td colspan="3" style="padding:6px 8px;font-weight:bold;">Shipping (DHL)</td>
            <td style="text-align:right;padding:6px 8px;font-weight:bold;">$${Number(shippingCost).toFixed(2)}</td>
          </tr>
        </table>
      `
    } else {
      // Legacy single-item
      const coffeeName = body.productName || customData.productId?.toUpperCase() || 'N/A'
      const weight = body.sampleWeight || customData.sampleWeight || 'N/A'
      const price = body.samplePrice || 'N/A'
      emailSubject = `New Sample Order Paid - ${coffeeName} ${weight}`
      itemsSummaryHtml = `
        <h3>Product</h3>
        <p><strong>Coffee:</strong> ${coffeeName}</p>
        <p><strong>Sample Size:</strong> ${weight}</p>
        <p><strong>Sample Price:</strong> $${typeof price === 'number' ? price.toFixed(2) : price} USD</p>
      `
    }

    // Format shipping address for email
    const formatAddress = (addr: Record<string, string> | null) => {
      if (!addr) return '<p><em>No shipping address provided</em></p>'
      // Handle both our format and PayPal's format
      const line1 = addr.addressLine1 || addr.address_line_1 || ''
      const line2 = addr.addressLine2 || addr.address_line_2 || ''
      const city = addr.city || addr.admin_area_2 || ''
      const state = addr.state || addr.admin_area_1 || ''
      const postal = addr.postalCode || addr.postal_code || ''
      const country = addr.countryCode || addr.country_code || ''
      return `
        <p>${line1}</p>
        ${line2 ? `<p>${line2}</p>` : ''}
        <p>${city}${state ? `, ${state}` : ''} ${postal}</p>
        <p>${country}</p>
      `
    }

    // Send notification email to Ethio Coffee team
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: emailSubject,
        html: `
          <h2>New Sample Order - Payment Confirmed</h2>
          <hr />
          <h3>Order Details</h3>
          <p><strong>PayPal Order ID:</strong> ${orderID}</p>
          <p><strong>PayPal Capture ID:</strong> ${capture?.id || 'N/A'}</p>
          <p><strong>Amount Paid:</strong> $${capture?.amount?.value || 'N/A'} ${capture?.amount?.currency_code || 'USD'}</p>
          <p><strong>Payment Status:</strong> ${capture?.status || captureData.status}</p>
          
          ${itemsSummaryHtml}
          
          ${orderNotes ? `<h3>Order Notes</h3><p style="background:#fffbeb;padding:10px;border-radius:6px;border:1px solid #fde68a;">${orderNotes}</p>` : ''}
          
          <h3>Buyer Information</h3>
          <p><strong>Name:</strong> ${payerName}</p>
          <p><strong>Email:</strong> ${payerEmail}</p>
          <h3>Shipping Address</h3>
          ${formatAddress(shippingAddr)}
          
          <hr />
          <p style="color: #666; font-size: 12px;">This is an automated notification from ethiocoffee.co sample ordering system.</p>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send sample order notification email:', emailError)
    }

    // Send confirmation email to buyer
    if (payerEmail && payerEmail !== 'N/A') {
      const buyerItemsHtml = isCartOrder && cartItems.length > 0
        ? cartItems.map((i: { productName: string; weight: string; quantity: number; priceUSD: number }) =>
            `<p>• ${i.productName} - ${i.weight} x${i.quantity} ($${(i.priceUSD * i.quantity).toFixed(2)})</p>`
          ).join('')
        : `<p><strong>Coffee:</strong> ${body.productName || 'N/A'}</p><p><strong>Sample Size:</strong> ${body.sampleWeight || 'N/A'}</p>`

      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: payerEmail,
          subject: `Your Ethio Coffee Sample Order Confirmation`,
          html: `
            <h2>Thank you for your sample order!</h2>
            <p>Hi ${payerName},</p>
            <p>We've received your payment and your coffee samples are being prepared for shipment via DHL Express.</p>
            
            <h3>Order Summary</h3>
            ${buyerItemsHtml}
            <p><strong>Amount Paid:</strong> $${capture?.amount?.value || 'N/A'} USD</p>
            <p><strong>Order Reference:</strong> ${orderID}</p>
            
            <p>We'll ship your sample${isCartOrder && cartItems.length > 1 ? 's' : ''} within 2-3 business days and send you tracking information once available.</p>
            
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
