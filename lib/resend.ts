"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sandhyakum609@gmail.com",
      subject: `New Message from ${name}`,
      replyTo: senderEmail,
      text: `
Name: ${name}
Email: ${senderEmail}
Phone: ${phone}

Message:
${message}
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
