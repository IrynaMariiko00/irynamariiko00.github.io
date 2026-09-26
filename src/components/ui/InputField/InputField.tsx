import type { FormField } from "~/types/formField";

const inputField = ({ label, input }: FormField) => {
  return (
    <div key={input.id} className="flex flex-col gap-2">
      <label
        htmlFor={label.htmlFor}
        className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray"
      >
        {label.text}
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        required={input.required}
        className="bg-transparent [color-scheme:dark] border-b border-[var(--color-border)] py-3 px-1 outline-none focus:border-blue transition-colors text-[var(--color-primary)] placeholder:text-[var(--color-border-dark)]"
      />
    </div>
  );
};

export default inputField;
