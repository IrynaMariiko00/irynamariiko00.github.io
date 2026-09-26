"use server";
import { formDataHomePage } from "~/constants/formData";
import { mailService } from "~/services/mailService";
import {
  extractFields,
  validateEmptyData,
  validateFormData,
} from "~/utils/mailHelpers";

export async function sendEmailHomePage(formData: FormData) {
  const rawData = extractFields(formData, formDataHomePage);

  const subject = "New Message (PORTRAITS)";
  const files = formData.getAll("attachments") as File[];

  const validationResult = validateFormData(formDataHomePage, rawData, files);

  if (validationResult) {
    return validationResult;
  }

  const validatedData = validateEmptyData(rawData);

  const html = `
        <p><strong>Name:</strong> ${validatedData.userName}</p>
        <p><strong>Email:</strong> ${validatedData.userEmail}</p>
        <p><strong>Contact:</strong> ${validatedData.alternativeContact}</p>
        <p><strong>Message:</strong> ${validatedData.userMessage}</p>
      `;

  return await mailService({
    files,
    subject,
    html,
    replyTo: rawData.userEmail,
  });
}
