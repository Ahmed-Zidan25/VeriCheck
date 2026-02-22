'use server'

import { Resend } from 'resend';

// process.env looks for variables you set in the Vercel Dashboard
const resend = new Resend(process.env.RESEND_API_KEY);

/* export async function sendContactEmail(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must be a verified domain in Resend
      to: ['contact@veri-check.co'],
      subject: `New Inspection Request: ${formData.company}`,
      replyTo: formData.email, // Allows you to hit 'Reply' in your inbox to email the customer
      html: `
        <div style="font-family: sans-serif; color: #1a2b3c;">
          <h2>New Quote Request</h2>
          <hr />
          <p><strong>Client Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Industry:</strong> ${formData.industry}</p>
          <p><strong>Timeline:</strong> ${formData.timeline}</p>
          <br />
          <p><strong>Message/Details:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${formData.details}
          </div>
        </div>
      `,
    });

    if (error) throw new Error(error.message);
    return { success: true };
  } catch (err) {
    console.error("Email Error:", err);
    return { success: false, error: "Failed to send email." };
  }
} */

  export async function sendContactEmail(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use this for testing!
      to: ['contact@veri-check.co'],
      subject: `New Request: ${formData.company}`,
      replyTo: formData.email,
      html: `<p>New message from ${formData.name}</p>`,
    });

    if (error) {
      console.error("Resend Error:", error); // This shows up in Vercel Logs
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Catch:", err);
    return { success: false };
  }
}