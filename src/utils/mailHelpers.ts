import { FILE_LIMITS } from "~/constants/formData";
import { FormField } from "~/types/formField";

export const handleEmptyField = (value: any) => {
  const trimmed = String(value).trim();

  if (trimmed === "") {
    return "-";
  }

  return trimmed;
};

export const validateEmptyData = (data: Record<string, any>) => {
  const arrData = Object.entries(data);
  const transformed = arrData.map(([key, value]) => {
    return [key, handleEmptyField(value)];
  });

  return Object.fromEntries(transformed);
};

export const extractFields = <T extends readonly FormField[]>(
  formData: FormData,
  config: T,
): Record<string, string> => {
  return config.reduce(
    (acc, field) => {
      const name = field.input.name;
      const type = field.input.type;

      if (name && type !== "file") {
        const value = formData.get(name);
        acc[name] = String(value || "");
      }

      return acc;
    },
    {} as Record<string, string>,
  );
};

export const validateFormData = (
  config: FormField[],
  values: Record<string, string>,
  files?: File[],
) => {
  for (const field of config) {
    const name = field.input.name;
    const value = values[name];
    const isRequired = field.input.required;
    const valueStr = value || "";
    const isEmpty = valueStr.trim() === "";
    const email = field.input.type === "email";

    if (isRequired && isEmpty) {
      return { error: `${field.label.text?.replace(":", "")} is required` };
    }

    if (email && !value.includes("@") && !isEmpty) {
      return { error: "Invalid email address" };
    }
  }

  if (files && files.length > 0) {
    const totalSize = files.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > FILE_LIMITS.MAX_SIZE_BYTES) {
      return { error: FILE_LIMITS.ERROR_MESSAGE };
    }
  }

  return null;
};
