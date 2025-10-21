'use server'
import nodemailer from 'nodemailer'

interface EmailResult {
   success: boolean
   error?: string
}

export async function sendContactEmail(formData: FormData): Promise<EmailResult> {
   const user_name = formData.get('user_name') as string | null
   const user_email = formData.get('user_email') as string | null
   const message = formData.get('message') as string | null
   const user_phone = formData.get('user_phone') as string | null

   if (!user_name || !user_email || !message || !user_phone) {
      return { success: false, error: 'Missing required fields' }
   }

   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.EMAIL_USER!,
         pass: process.env.EMAIL_PASS!,
      },
   })

   const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO!,
      subject: `New message from ${user_name}`,
      html: `
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
   }

   try {
      await transporter.sendMail(mailOptions)
      return { success: true }
   } catch (err: unknown) {
      console.error('Email send error:', err)
      let errorMessage = 'Unknown error'
      if (err instanceof Error) errorMessage = err.message
      return { success: false, error: errorMessage }
   }
}

export async function handleContactFormAction(
   _unused: unknown,
   formData: FormData
): Promise<EmailResult> {
   return await sendContactEmail(formData)
}