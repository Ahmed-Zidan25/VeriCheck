'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Required for Sandbox
      to: ['ahmadibrahim.zidan@gmail.com'], // Required for Sandbox
      subject: `New Request from ${formData.company}`,
      replyTo: formData.email, // This allows you to reply to the user
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.details}</p>
      `,
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: "Internal Server Error" };
  }
}