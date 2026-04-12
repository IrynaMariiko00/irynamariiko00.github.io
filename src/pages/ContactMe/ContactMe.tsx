import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { Reveal } from "~/components/ui/Reveal";
import SizeSelector from "./fields/SizeSelector";
import CustomDatePicker from "~/components/ui/DatePicker/DatePicker";
import RadioToggle from "./fields/RadioToggle";
import FileUploadField from "~/components/ui/FileUploadField/FileUploadField";
import InputField from "~/components/ui/InputField/InputField";
import type { FieldProps } from "~/types/formField";
import { useState, type ComponentType } from "react";
import { formDataPage } from "~/constants/formData";
import TextArea from "./fields/TextArea";
import { useScrollTop } from "~/hooks/useScrollTop";

const DatePickerField = ({ label }: FieldProps) => (
  <CustomDatePicker
    label={label.text || "Deadline Date"}
    subLabel="Shipping takes 2-3 weeks"
  />
);

const ContactMe = () => {
  const [hasFrame, setHasFrame] = useState(false);
  const FIELD_MAP: Record<string, ComponentType<FieldProps>> = {
    size: SizeSelector,
    deadline: DatePickerField,
    needFrame: RadioToggle,
    needMat: RadioToggle,
    message: TextArea,

    text: InputField,
    email: InputField,
    file: FileUploadField,
  };

  const FULL_WIDTH_IDS = ["needFrame", "needMat", "size", "photos", "message"];
  const handleScrollTop = useScrollTop();

  return (
    <main
      id="contact-form"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      <LiquidBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 xl:mb-16 gap-8">
          <Reveal direction="right" duration={0.8} className="max-w-xl">
            <h2 className="extra-big leading-none">
              Start Your <br />
              <span className="text-blue">Commission</span>
            </h2>
            <p className="text text-gray leading-relaxed mt-4">
              Just fill out a short and simple form, and I’ll get in touch with
              you soon.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.4}>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 glass-card bg-[var(--color-glass-bg)] p-6 xl:p-8 md:p-12">
            {formDataPage.map((field) => {
              const { input } = field;

              if (input.id === "needMat" && !hasFrame) {
                return null;
              }

              const isFullWidth = FULL_WIDTH_IDS.includes(input.id);

              const Component =
                FIELD_MAP[input.id] || FIELD_MAP[input.type] || InputField;

              return (
                <div className={isFullWidth ? "md:col-span-2" : ""}>
                  <Component
                    key={input.id}
                    {...field}
                    onChange={(val: string) => {
                      if (input.id === "needFrame") {
                        setHasFrame(val === "Yes");
                      }
                    }}
                  />
                </div>
              );
            })}
            <div className="md:col-span-2 flex gap-8 xl:gap-20 justify-center mt-4">
              <button
                type="reset"
                className="w-[45%] xl:w-[20%] glass-btn py-3 justify-center uppercase rounded-2xl"
                onClick={handleScrollTop}
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-[45%] xl:w-[20%] px-1 py-1 xl:py-3 blue-btn rounded-2xl"
                onClick={handleScrollTop}
              >
                Send Request
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </main>
  );
};

export default ContactMe;
