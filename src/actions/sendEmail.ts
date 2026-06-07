"use server";

import { Resend } from "resend";
import { FILE_LIMITS } from "~/constants/formData";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderName = formData.get("userName");
  const senderEmail = formData.get("userEmail") as string;
  const senderTel = formData.get("userTel");
  const senderMessage = formData.get("userMessage");
  const files = formData.getAll("attachments") as File[];

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);

  if (totalSize > FILE_LIMITS.MAX_SIZE_BYTES) {
    return { error: FILE_LIMITS.ERROR_MESSAGE };
  }

  if (!senderName || !senderEmail) {
    return { error: "Required fields are missing" };
  }

  if (!senderEmail.includes("@")) {
    return { error: "Invalid email address" };
  }

  const attachments = await Promise.all(
    files
      .filter((file) => file.size > 0)
      .map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return {
          filename: file.name,
          content: buffer,
        };
      }),
  );
  try {
    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM as string,
      to: process.env.MAIL_TO as string,
      attachments: attachments,
      subject: "New Message (PORTRAITS)",
      html: `
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Tel:</strong> ${senderTel}</p>
        <p><strong>Message:</strong> ${senderMessage}</p>
      `,
      replyTo: senderEmail as string,
    });

    if (error) {
      return { error: error.message };
    }
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { error: "Something went wrong" };
  }
}
