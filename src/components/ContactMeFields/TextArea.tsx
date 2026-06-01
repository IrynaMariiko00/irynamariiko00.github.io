import type { FieldProps } from "~/types/formField";

const TextArea = ({ label, input, onChange }: FieldProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor={input.id}
        className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray pl-3"
      >
        {label.text}
      </label>
      <textarea
        id={input.id}
        placeholder={input.placeholder}
        required={input.required}
        rows={3}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent no-scrollbar placeholder:text-[var(--color-border-dark)] border border-[var(--color-border)] rounded-2xl py-4 px-3 text-[var(--primary-color)] outline-none resize-none min-h-[120px]"
      />
    </div>
  );
};

export default TextArea;
