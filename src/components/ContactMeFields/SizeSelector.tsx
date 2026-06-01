import { useState } from "react";
import type { FormField } from "~/types/formField";

const SizeSelector = ({ input, label }: FormField) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="md:col-span-2 flex flex-col gap-4 mt-4">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray">
        {label.text}
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {input.options?.map((option) => {
          const isCustom = option.id === "custom";
          const isSelected = selectedValue === option.id;

          return (
            <label
              key={option.id}
              className={`
                group relative flex flex-col p-5 glass-card overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
               has-[:checked]:border-[var(--color-blue-light)]
                ${isCustom && isSelected ? "lg:col-span-2 sm:col-span-2" : "col-span-1"}
              `}
            >
              <div className="hover-glow !opacity-0 group-hover:!opacity-100 transition-opacity duration-500 pointer-events-none" />

              <input
                type="radio"
                name={input.id}
                value={option.id}
                required={input.required}
                className="sr-only"
                onChange={handleChange}
              />

              <div
                className="absolute top-5 right-5 w-5 h-5 flex items-center justify-center pointer-events-none z-10"
                aria-hidden="true"
              >
                <div className="w-5 h-5 rounded-full border-2 border-[var(--color-border-dark)] flex items-center justify-center transition-all duration-300 group-has-[:checked]:border-[var(--color-blue-light)]">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-blue-light)] scale-0 transition-transform duration-300 ease-out group-has-[:checked]:scale-100" />
                </div>
              </div>

              <div
                className={`grid h-full items-center gap-6 ${isCustom && isSelected ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[var(--color-primary)] small-text card-title transition-colors duration-300 group-has-[:checked]:text-[var(--color-blue-light)]">
                    {option.label}
                  </span>
                  <span className="text text-gray text-[0.75rem] uppercase tracking-wider">
                    {option.dims}
                  </span>
                  <span className="text text-gray text-[0.7rem] italic">
                    {option.inches}
                  </span>
                </div>

                {isCustom && isSelected && (
                  <div className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-500 items-end pb-1">
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="text-[0.6rem] text text-gray uppercase tracking-widest">
                        Width (cm)
                      </span>
                      <input
                        name="custom_width"
                        className="bg-transparent shadow-[0_1px_0_0_rgba(255,255,255,0.2)] text-[var(--primary-color)] outline-none text-sm p-1 w-full transition-colors"
                        placeholder="0"
                        required
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    <div className="flex flex-col gap-2 flex-1 pr-20">
                      <span className="text-[0.6rem] text text-gray uppercase tracking-widest">
                        Height (cm)
                      </span>
                      <input
                        name="custom_height"
                        className="bg-transparent shadow-[0_1px_0_0_rgba(255,255,255,0.2)] text-[var(--primary-color)] outline-none text-sm p-1 w-full transition-colors"
                        placeholder="0"
                        required
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
