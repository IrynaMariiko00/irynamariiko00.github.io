import type { FormField } from "~/types/formField";
import AttachFileIcon from "~/assets/icons/AttachFileIcon";
import AttachImageIcon from "~/assets/icons/AttachImageIcon";

export const FILE_LIMITS = {
  MAX_SIZE_MB: 10,
  MAX_SIZE_BYTES: 10 * 1024 * 1024,
  ERROR_MESSAGE: "Total size exceeds 10MB limit. Please remove some files.",
};

export const formDataHomePage: FormField[] = [
  {
    label: { htmlFor: "name", text: "Name:" },
    input: { id: "name", type: "text", required: true, name: "userName" },
  },
  {
    label: { htmlFor: "email", text: "Email:" },
    input: { id: "email", type: "email", required: true, name: "userEmail" },
  },
  {
    label: { htmlFor: "contact", text: "Alternative Contact (optional):" },
    input: {
      id: "contact",
      type: "text",
      required: false,
      name: "alternativeContact",
    },
  },
  {
    label: { htmlFor: "message", text: "Message:" },
    input: {
      id: "message",
      type: "text",
      required: false,
      name: "userMessage",
    },
  },
];

export const formDataCommisionData: FormField[] = [
  {
    label: { htmlFor: "fullName", text: "Full Name*" },
    input: {
      id: "name",
      type: "text",
      placeholder: "John Doe",
      name: "fullName",
      required: true,
    },
  },
  {
    label: { htmlFor: "email", text: "Email Address*" },
    input: {
      id: "email",
      type: "email",
      placeholder: "example@mail.com",
      name: "userEmail",
      required: true,
    },
  },
  {
    label: { htmlFor: "destination", text: "Shipping Destination*" },
    input: {
      id: "destination",
      type: "text",
      placeholder: "Country, City",
      name: "userDestination",
      required: true,
    },
  },
  {
    label: { htmlFor: "deadline", text: "Deadline Date*" },
    input: {
      id: "deadline",
      type: "text",
      placeholder: "dd/mm/yyyy",
      name: "userDeadline",
      required: true,
    },
  },
  {
    label: {
      htmlFor: "alternative-contact",
      text: "Alternative Contact (optional)",
    },
    input: {
      id: "alternative-contact",
      type: "text",
      placeholder: "Instagram, Telegram (specify)",
      name: "userAlternativeContact",
      required: false,
    },
  },
  {
    label: { htmlFor: "size", text: "Select Portrait Size" },
    input: {
      id: "size",
      type: "radio",
      required: false,
      name: "portraitSize",
      options: [
        {
          id: "small",
          label: "Small",
          dims: "21.0 x 29.7 cm",
          inches: "8.3 x 11.7 in",
        },
        {
          id: "medium",
          label: "Medium",
          dims: "29.7 x 42.0 cm",
          inches: "11.7 x 16.5 in",
        },
        {
          id: "big",
          label: "Big",
          dims: "42.0 x 59.4 cm",
          inches: "16.5 x 23.4 in",
        },
        {
          id: "extra-big",
          label: "Extra Big",
          dims: "59.4 x 84.1 cm",
          inches: "23.4 x 33.1 in",
        },
        {
          id: "custom",
          label: "Custom",
          dims: "Individual size",
          inches: "Special request",
        },
      ],
    },
  },

  {
    label: { htmlFor: "needFrame", text: "Would you like a frame?" },
    input: {
      id: "needFrame",
      type: "radio",
      required: false,
      name: "needFrame",
      options: [
        { id: "frame-yes", label: "Yes" },
        { id: "frame-no", label: "No" },
      ],
    },
  },
  {
    label: { htmlFor: "needMat", text: "Should the frame include a mat?" },
    input: {
      id: "needMat",
      type: "radio",
      required: false,
      name: "needMat",
      options: [
        { id: "mat-yes", label: "Yes" },
        { id: "mat-no", label: "No" },
      ],
    },
  },
  {
    label: { htmlFor: "photos", text: "Upload your photos" },
    input: {
      id: "photos",
      type: "file",
      required: false,
      multiple: true,
      name: "attachments",
      accept: "image/png, image/jpeg",
    },
  },
  {
    label: { htmlFor: "message", text: "Message (optional)" },
    input: {
      id: "message",
      type: "text",
      name: "userMessage",
      placeholder: "Tell me about your idea...",
      required: false,
    },
  },
];

export const attachmentOptions = [
  {
    id: "file",
    icon: AttachFileIcon,
    label: "Attach File",
    accept: "*",
  },
  {
    id: "image",
    icon: AttachImageIcon,
    label: "Attach Image",
    accept: "image/*",
  },
];
