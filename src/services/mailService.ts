import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface mailServiceProps {
  files: File[];
  from?: string;
  to?: string;
  subject: string;
  html: string;
  replyTo: string;
}

export async function mailService({
  files,
  from = process.env.MAIL_FROM as string,
  to = process.env.MAIL_TO as string,
  subject,
  html,
  replyTo,
}: mailServiceProps) {
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
      from: from,
      to: to,
      attachments: attachments,
      subject: subject,
      html: html,
      replyTo: replyTo,
    });
    if (error) {
      return { error: error.message };
    }
    return { success: true };
  } catch (error) {
    console.log("Email error:", error);
    return { error: "Something went wrong" };
  }
}
