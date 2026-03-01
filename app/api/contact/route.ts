import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { escapeHtml, isValidEmail, truncate } from '../../lib/sanitize'
import { rateLimit, getClientIp } from '../../lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

// Your email address to receive form submissions
const TO_EMAIL = process.env.CONTACT_EMAIL || 'coffee@ethiocoffee.co'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ethiocoffee.co'

// Max lengths for input fields
const MAX_FIELD_LENGTH = 500
const MAX_MESSAGE_LENGTH = 5000

export async function POST(request: NextRequest) {
  // Rate limit: 5 contact submissions per IP per minute
  const ip = getClientIp(request)
  const { allowed } = rateLimit(`contact:${ip}`, 5, 60_000)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

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

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      )
    }

    // Truncate all inputs to prevent oversized payloads
    const safeBusinessName = truncate(String(businessName || ''), MAX_FIELD_LENGTH)
    const safeContactName = truncate(String(contactName), MAX_FIELD_LENGTH)
    const safeEmail = truncate(String(email), MAX_FIELD_LENGTH)
    const safePhone = truncate(String(phone || ''), MAX_FIELD_LENGTH)
    const safeCountry = truncate(String(country || ''), MAX_FIELD_LENGTH)
    const safeBusinessType = truncate(String(businessType || ''), MAX_FIELD_LENGTH)
    const safeReferralSource = truncate(String(referralSource || ''), MAX_FIELD_LENGTH)
    const safeMessage = truncate(String(message || ''), MAX_MESSAGE_LENGTH)
    const safeProductName = truncate(String(productName || ''), MAX_FIELD_LENGTH)

    // Build email subject
    const subject = _subject || (formType === 'quote' 
      ? `New Quote Request: ${safeProductName || 'Product'}`
      : `New Contact Inquiry from ${safeBusinessName || safeContactName}`)

    // Build email content — all user input is HTML-escaped
    let emailHtml = ''
    
    if (formType === 'quote') {
      emailHtml = `
        <h2>New Quote Request</h2>
        <p><strong>Product:</strong> ${escapeHtml(safeProductName) || 'N/A'}</p>
        <p><strong>Date:</strong> ${orderDate ? new Date(orderDate).toLocaleString() : new Date().toLocaleString()}</p>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Business Name:</strong> ${escapeHtml(safeBusinessName) || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${escapeHtml(safeContactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePhone) || 'N/A'}</p>
        <hr />
        <h3>Message</h3>
        <p>${escapeHtml(safeMessage) || 'No message provided'}</p>
      `
    } else {
      emailHtml = `
        <h2>New Contact Inquiry</h2>
        <h3>Business Information</h3>
        <p><strong>Business Name:</strong> ${escapeHtml(safeBusinessName) || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${escapeHtml(safeContactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePhone) || 'N/A'}</p>
        <p><strong>Country:</strong> ${escapeHtml(safeCountry) || 'N/A'}</p>
        <p><strong>Business Type:</strong> ${escapeHtml(safeBusinessType) || 'N/A'}</p>
        <p><strong>How did they hear about us:</strong> ${escapeHtml(safeReferralSource) || 'N/A'}</p>
        <hr />
        <h3>Message</h3>
        <p>${escapeHtml(safeMessage) || 'No message provided'}</p>
      `
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: `Ethio Coffee <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: safeEmail,
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
      { success: true, message: 'Email sent successfully' },
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
