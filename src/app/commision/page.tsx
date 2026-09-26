"use client";

import { useState } from "react";
import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { Reveal } from "~/components/ui/Reveal";
import { formDataCommisionData } from "~/constants/formData";
import { useScrollTop } from "~/hooks/useScrollTop";
import { sendEmailCommisionPage } from "~/actions/sendEmailCommisionPage";
import { useFileSelection } from "~/hooks/useFileSelection";
import { useToast } from "~/contexts/ToastContext";
import { FormActions } from "~/components/ContactMeFields/FormActions";
import { renderField } from "~/components/CommissionForm/FormActions";

export default function ContactMePage() {
  const [hasFrame, setHasFrame] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const handleScrollTop = useScrollTop();
  const { showToast } = useToast();
  const fileControls = useFileSelection();

  const resetCustomForm = () => {
    setHasFrame(false);
    setResetCount((prev) => prev + 1);
    resetFiles();
  };

  const { selectedFiles, isOverLimit, resetFiles } = fileControls;

  const handleAction = async (data: FormData) => {
    data.delete("attachments");
    selectedFiles.forEach((file) => {
      data.append("attachments", file);
    });

    const result = await sendEmailCommisionPage(data);

    if (result && "success" in result) {
      showToast("Message sent successfully!", "success");
      resetCustomForm();
    }

    if (result?.error) {
      showToast(result.error, "error");
    }
  };

  return (
    <main
      id="contact-form"
      className="relative min-h-screen xl:py-36 py-24 px-6 overflow-hidden"
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
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 glass-card bg-[var(--color-glass-bg)] p-6 xl:p-8 md:p-12"
            action={handleAction}
          >
            {formDataCommisionData.map((field) =>
              renderField(
                field,
                hasFrame,
                setHasFrame,
                fileControls,
                resetCount,
              ),
            )}
            <FormActions
              onScrollTop={handleScrollTop}
              isOverLimit={isOverLimit}
              onReset={() => {
                resetCustomForm();
              }}
            />
          </form>
        </Reveal>
      </div>
    </main>
  );
}
