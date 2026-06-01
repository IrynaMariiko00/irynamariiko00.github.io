import type { FieldProps } from "~/types/formField";

const RadioToggle = ({ input, label, onChange }: FieldProps) => {
  return (
    <div key={input.id} className="flex flex-col pl-3 gap-4">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray">
        {label.text}
      </label>
      <div className="flex gap-12">
        {input.options?.map((option) => (
          <label
            key={option.id}
            className="group relative flex flex-col p-4 overflow-hidden cursor-pointer transition-all duration-300 has-[:checked]:border-[var(--color-blue-light)] has-[:checked]:bg-blue/10"
          >
            <input
              type="radio"
              name={input.id}
              value={option.id}
              required={input.required}
              className="sr-only"
              onChange={() => {
                if (onChange) {
                  onChange(option.label);
                }
              }}
              defaultChecked={option.label === "No"}
            />

            <div
              className="absolute left-0 w-4 h-4 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-4 h-4 rounded-full border-2 border-[var(--color-border-dark)] flex items-center justify-center transition-all duration-300 group-has-[:checked]:border-[var(--color-blue-light)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-blue-light)] scale-0 transition-transform duration-300 ease-out group-has-[:checked]:scale-100" />
              </div>
            </div>

            <span className="text-[var(--color-primary)] inline-flex pl-2 small-text card-title transition-colors duration-300 group-has-[:checked]:text-[var(--color-blue-light)]">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioToggle;
