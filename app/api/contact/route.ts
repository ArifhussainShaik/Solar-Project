import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().max(50).optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  interest: z.enum(["residential", "commercial", "agricultural", "maintenance", "other"]),
  monthlyBill: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})

// Simple rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Sanitize all string inputs
    const sanitizedData = {
      ...validatedData,
      firstName: sanitizeInput(validatedData.firstName),
      lastName: validatedData.lastName ? sanitizeInput(validatedData.lastName) : undefined,
      email: validatedData.email ? sanitizeInput(validatedData.email) : undefined,
      phone: sanitizeInput(validatedData.phone),
      message: sanitizeInput(validatedData.message),
      monthlyBill: validatedData.monthlyBill ? sanitizeInput(validatedData.monthlyBill) : undefined,
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    
    // For now, we'll log the data (in production, use proper logging)
    console.log('Contact form submission:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip: ip,
    })

    // Simulate email sending (replace with actual email service)
    const emailContent = `
New Contact Form Submission:

Name: ${sanitizedData.firstName} ${sanitizedData.lastName || ''}
Email: ${sanitizedData.email || 'Not provided'}
Phone: ${sanitizedData.phone}
Interest: ${sanitizedData.interest}
Monthly Bill: ${sanitizedData.monthlyBill || 'Not provided'}
Message: ${sanitizedData.message}

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
IP Address: ${ip}
    `

    // TODO: Implement actual email sending service
    // await sendEmail({
    //   to: 'info@kohinoorsolar.com',
    //   subject: 'New Contact Form Submission',
    //   text: emailContent
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been received. We will contact you within 24 hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid form data', 
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}