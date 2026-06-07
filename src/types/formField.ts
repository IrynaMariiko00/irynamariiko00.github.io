type Option = {
  id: string;
  label: string;
  dims?: string;
  inches?: string;
};

export type FormField = {
  label: {
    htmlFor: string;
    text?: string;
  };
  input: {
    id: string;
    type: string;
    placeholder?: string;
    required: boolean;
    multiple?: boolean;
    accept?: string;
    name: string;
    options?: Option[];
  };
};

export interface FieldProps extends FormField {
  onChange?: (value: string) => void;
}
