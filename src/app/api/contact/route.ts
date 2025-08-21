import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  budget: z.string().min(1),
  goals: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Log the contact form submission (in production, you'd send an email)
    console.log('Contact form submission:', validatedData)
    
    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, etc.
    // 2. Store the contact in a database
    // 3. Send notifications to your team
    
    // For now, we'll just log and return success
    // In production, you might want to use Resend:
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@synapeer.com',
      to: 'info@synapeer.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Goals:</strong> ${validatedData.goals}</p>
      `
    })
    */
    
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.issues },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
