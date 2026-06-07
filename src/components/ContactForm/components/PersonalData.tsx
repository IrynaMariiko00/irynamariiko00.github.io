import { formData } from "~/constants/formData";

export const PersonalData = () => {
  return (
    <fieldset className="w-full md:w-[35%] flex flex-col gap-8">
      <legend className="card-title mb-10 text text-gray uppercase tracking-widest">
        Personal Data
      </legend>

      {formData.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <label
            htmlFor={item.label.htmlFor}
            className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray"
          >
            {item.label.text}
          </label>
          <input
            id={item.input.id}
            name={item.input.name}
            type={item.input.type}
            required={item.input.required}
            placeholder={item.input.placeholder || ""}
            className="bg-transparent [color-scheme:dark] border-b border-[var(--color-border)] py-2 px-1 outline-none focus:border-blue transition-colors text-[var(--color-primary)] placeholder:text-[var(--color-border-dark)]"
          />
        </div>
      ))}
    </fieldset>
  );
};
