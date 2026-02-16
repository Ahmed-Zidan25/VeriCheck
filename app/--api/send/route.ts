import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, industry, details, timeline } = body;

    // Namecheap SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@veri-check.co', 
      replyTo: email, // This allows you to reply directly to the customer
      subject: `New Quote Request: ${service} - ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #002244; padding: 20px; text-align: center;">
            <h1 style="color: #76bc21; margin: 0;">New Quote Inquiry</h1>
          </div>
          <div style="padding: 24px; color: #1f2937;">
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Requested Service:</strong> ${service}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Project Details:</strong></p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px;">${details}</div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    console.error("Vercel Edge Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}