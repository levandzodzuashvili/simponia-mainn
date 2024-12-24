"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

interface SendEmailResponse {
  status: number;
  message: string;
  error?: string;
}

export async function sendEmail(
  formData: FormData
): Promise<SendEmailResponse> {
  const senderEmail = formData.get("email") as string;
  const message = formData.get("message") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  if (!senderEmail || !message || !firstName || !lastName) {
    return { status: 400, message: "Missing email or message" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "asimponia@gmail.com",
      subject: `I'm ${firstName} ${lastName}`,
      replyTo: senderEmail,
      text: message,
    });
    return { status: 200, message: "Email sent successfully" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: 500, message: "Failed to send email" };
  }
}
