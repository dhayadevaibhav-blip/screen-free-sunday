import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this route runs in the Node.js runtime (nodemailer doesn't work on the Edge runtime)
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate SMTP environment variables early with a clear error
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials are not configured: SMTP_USER or SMTP_PASS is missing.");
      return NextResponse.json(
        { error: "Email configuration not set on the server (SMTP_USER / SMTP_PASS)." },
        { status: 500 }
      );
    }

    // Configure nodemailer (using environment variables)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: parseInt(SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Verify transporter connectivity/config early to produce clearer errors
    try {
      // transporter.verify() may throw or reject if auth/config is invalid
      await transporter.verify();
    } catch (verifyErr) {
      console.error("SMTP transporter verification failed:", verifyErr);
      return NextResponse.json(
        { error: "Email server configuration is invalid; check SMTP settings." },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: SMTP_USER,
      to: CONTACT_EMAIL || SMTP_USER,
      subject: `New Contact Form Submission from Screen Free Sundays`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🌱 New Contact Message</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0;">
              You have received a new message through the Screen Free Sundays contact form.
            </p>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; display: block; margin-bottom: 8px;">Name:</strong>
              <p style="color: #374151; margin: 0; padding: 12px; background-color: #f3f4f6; border-radius: 8px;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; display: block; margin-bottom: 8px;">Email:</strong>
              <p style="color: #374151; margin: 0; padding: 12px; background-color: #f3f4f6; border-radius: 8px;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; display: block; margin-bottom: 8px;">Message:</strong>
              <p style="color: #374151; margin: 0; padding: 12px; background-color: #f3f4f6; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the Screen Free Sundays website contact form.</p>
          </div>
        </div>
      `,
    };

  // Send email
  await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}





