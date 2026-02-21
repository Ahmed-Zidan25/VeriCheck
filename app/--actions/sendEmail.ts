'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  try {
    const data = await resend.emails.send({
      from: 'Vericheck Notifications <notifications@yourdomain.com>',
      to: ['contact@veri-check.co'],
      subject: `New Inspection Request: ${formData.service}`,
      html: `
        <h1>New Inspection Request</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Industry:</strong> ${formData.industry}</p>
        <p><strong>Timeline:</strong> ${formData.timeline}</p>
        <p><strong>Details:</strong> ${formData.details}</p>
      `,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}