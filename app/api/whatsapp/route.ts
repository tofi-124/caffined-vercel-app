import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, topic, message } = body

    // Validate required fields
    if (!name || !phone || !topic || !message) {
      return NextResponse.json(
        { error: 'Name, phone, topic, and message are required' },
        { status: 400 }
      )
    }

    // Send inquiry via email using Resend
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const TO_EMAIL = process.env.CONTACT_EMAIL || 'coffee@ethiocoffee.co'
      const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ethiocoffee.co'

      await resend.emails.send({
        from: `Ethio Coffee <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `WhatsApp Inquiry: ${topic} — from ${name}`,
        html: `
          <h2>New WhatsApp Widget Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <hr />
          <h3>Message</h3>
          <p>${message}</p>
          <hr />
          <p style="color: #999; font-size: 12px;">
            This message was sent via the WhatsApp chat widget on ethiocoffee.co.
          </p>
        `,
      })
    } catch (emailErr) {
      console.error('WhatsApp widget email failed:', emailErr)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('WhatsApp API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message. Please try again.' },
      { status: 500 }
    )
  }
}
