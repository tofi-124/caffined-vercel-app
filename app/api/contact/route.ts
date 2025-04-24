import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Function to send email
async function sendEmail(formData: any) {
  try {
    // For production, configure your SMTP transport
    const transporter = nodemailer.createTransport({
      // Configure this based on your email provider
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Convert form data to HTML message
    const htmlContent = `
      <h2>New ${formData.formType === 'sample' ? 'Sample Order' : 'Contact Form Submission'}</h2>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <hr />
      ${Object.entries(formData)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join('')}
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@ethiocoffee.et',
      to: 'info@ethiocoffee.et',
      subject: formData.formType === 'sample' 
        ? `New Sample Order: ${formData.productName || 'Coffee Sample'}`
        : `New Contact Form Submission: ${formData.businessName || formData.name || 'Form Submission'}`,
      html: htmlContent,
      replyTo: formData.email,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Log form submission as fallback if email fails
    console.log('FORM SUBMISSION FALLBACK LOG:');
    console.log('To: info@ethiocoffee.et');
    console.log('From:', formData.email);
    console.log('Subject:', formData.formType === 'sample' 
      ? `New Sample Order: ${formData.productName || 'Coffee Sample'}`
      : `New Contact Form Submission: ${formData.businessName || formData.name || 'Form Submission'}`);
    console.log('Form Data:', formData);
    
    // Return failure but also log that we captured the data
    return { 
      success: false, 
      error: error.message,
      fallback: true,
      message: 'Email delivery failed but submission was logged. We will contact you soon.'
    };
  }
}

// API route handler for POST requests
export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['email'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Send email
    const emailResult = await sendEmail(formData);

    if (emailResult.success) {
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully!' },
        { status: 200 }
      );
    } else {
      // If we have a fallback log, tell the user we still got their submission
      if (emailResult.fallback) {
        return NextResponse.json(
          { success: true, message: emailResult.message },
          { status: 200 }
        );
      }
      
      console.error('Failed to send email:', emailResult.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again later or contact us directly at info@ethiocoffee.et' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request. Please email us directly at info@ethiocoffee.et' },
      { status: 500 }
    );
  }
}