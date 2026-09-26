"use server";

import { formDataCommisionData } from "~/constants/formData";
import { mailService } from "~/services/mailService";
import {
  extractFields,
  validateEmptyData,
  validateFormData,
} from "~/utils/mailHelpers";

export async function sendEmailCommisionPage(formData: FormData) {
  const rawData = extractFields(formData, formDataCommisionData);

  const subject = "New Detailed Message (PORTRAITS)";
  const files = formData.getAll("attachments") as File[];
  console.log("attachments", formData.getAll("attachments"));
  console.log("photos", formData.getAll("photos"));

  const validationResult = validateFormData(
    formDataCommisionData,
    rawData,
    files,
  );

  if (validationResult) {
    return validationResult;
  }

  const validatedData = validateEmptyData(rawData);

  const html = `
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Email:</strong> ${validatedData.userEmail}</p>
        <p><strong>Destination:</strong> ${validatedData.userDestination}</p>
        <p><strong>Deadline:</strong> ${validatedData.userDeadline}</p>
        <p><strong>Contact:</strong> ${validatedData.userAlternativeContact}</p>
        <p><strong>Size:</strong> ${validatedData.portraitSize}</p>
        <p><strong>Need Frame:</strong> ${validatedData.needFrame}</p>
        <p><strong>Need Mat:</strong> ${validatedData.needMat}</p>
        <p><strong>Message:</strong> ${validatedData.userMessage}</p>
      `;

  return await mailService({
    files,
    subject,
    html,
    replyTo: rawData.userEmail,
  });
}
