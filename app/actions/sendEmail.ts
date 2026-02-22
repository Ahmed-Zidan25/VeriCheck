'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'VeriCheck <notifications@veri-check.co>', 
      to: ['contact@veri-check.co'],
      subject: `New Request from ${formData.company || 'New Client'}`,
      replyTo: formData.email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #1a2b3c;">New Inspection Quote Request</h2>
          <hr />
          <p><strong>Client Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <br />
          <p><strong>Message / Requirements:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${formData.details}
          </div>
        </div>
      `,
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: "Internal Server Error" };
  }
}