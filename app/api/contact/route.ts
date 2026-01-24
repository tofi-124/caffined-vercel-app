import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Your email address to receive form submissions
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@ethiocoffee.et'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ethiocoffee.et'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      formType,
      businessName,
      contactName,
      email,
      phone,
      country,
      businessType,
      referralSource,
      message,
      requestSamples,
      productName,
      orderDate,
      _subject
    } = body

    // Validate required fields
    if (!email || !contactName) {
      return NextResponse.json(
        { error: 'Email and contact name are required' },
        { status: 400 }
      )
    }

    // Build email subject
    const subject = _subject || (formType === 'quote' 
      ? `New Quote Request: ${productName || 'Product'}`
      : `New Contact Inquiry from ${businessName || contactName}`)

    // Build email content based on form type
    let emailHtml = ''
    
    if (formType === 'quote') {
      emailHtml = `
        <h2>New Quote Request</h2>
        <p><strong>Product:</strong> ${productName || 'N/A'}</p>
        <p><strong>Date:</strong> ${orderDate ? new Date(orderDate).toLocaleString() : new Date().toLocaleString()}</p>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <hr />
        <h3>Message</h3>
        <p>${message || 'No message provided'}</p>
      `
    } else {
      emailHtml = `
        <h2>New Contact Inquiry</h2>
        <h3>Business Information</h3>
        <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Business Type:</strong> ${businessType || 'N/A'}</p>
        <p><strong>How did they hear about us:</strong> ${referralSource || 'N/A'}</p>
        <p><strong>Requesting Samples:</strong> ${requestSamples ? 'Yes' : 'No'}</p>
        <hr />
        <h3>Message</h3>
        <p>${message || 'No message provided'}</p>
      `
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `Ethio Coffee <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
