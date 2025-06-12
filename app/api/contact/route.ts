import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, interest, monthlyBill, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone number format (basic Indian format)
    const phoneRegex = /^\+?[0-9]{10,12}$/
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        ${monthlyBill ? `<p><strong>Monthly Bill:</strong> ₹${monthlyBill}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Kohinoor Solar',
      html: `
        <h2>Thank you for contacting Kohinoor Solar!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and one of our solar experts will contact you within 24 hours to discuss your requirements and provide a personalized quote.</p>
        <p>Here's a summary of your submission:</p>
        <ul>
          <li><strong>Interest:</strong> ${interest}</li>
          ${monthlyBill ? `<li><strong>Monthly Bill:</strong> ₹${monthlyBill}</li>` : ''}
        </ul>
        <p>If you have any urgent questions, please feel free to call us at <a href="tel:+919985690350">+91 99856 90350</a>.</p>
        <p>Best regards,<br>Team Kohinoor Solar</p>
      `,
    }

    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 