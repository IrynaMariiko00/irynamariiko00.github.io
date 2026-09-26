import { formDataHomePage } from "~/constants/formData";
import InputField from "~/components/ui/InputField/InputField";

export const PersonalData = () => {
  return (
    <fieldset className="w-full md:w-[35%] flex flex-col gap-8">
      <legend className="card-title mb-10 text text-gray uppercase tracking-widest">
        Personal Data
      </legend>

      {formDataHomePage
        .filter((item) => item.input.name !== "userMessage")
        .map((item) => (
          <InputField key={item.input.id} {...item} />
        ))}
    </fieldset>
  );
};
