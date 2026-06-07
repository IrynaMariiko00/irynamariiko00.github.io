"use client";

import { useRef } from "react";
import { sendEmail } from "~/actions/sendEmail";
import { useFileSelection } from "~/hooks/useFileSelection";
import { PersonalData } from "./components/PersonalData";
import { Message } from "./components/Message";
import { useToast } from "~/contexts/ToastContext";

const ContactForm = () => {
  const { showToast } = useToast();
  const handleAction = async (data: FormData) => {
    selectedFiles.forEach((file) => {
      data.append("attachments", file);
    });
    const result = await sendEmail(data);

    if (result?.success) {
      showToast("Message sent successfully!", "success");
    }

    if (result?.error) {
      showToast(result.error, "error");
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const fileControls = useFileSelection();

  const { selectedFiles, handleFileChange } = fileControls;

  return (
    <form
      action={handleAction}
      className="glass-card mt-[8%] xl:mt-[3%] pb-[5%] px-[5%] w-[100%] mx-auto relative overflow-hidden"
    >
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        type="file"
        multiple
        ref={photoInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <div className="flex flex-col md:flex-row justify-between gap-12 min-h-[200px] relative z-10">
        <PersonalData />

        <Message
          photoInputRef={photoInputRef}
          fileInputRef={fileInputRef}
          fileControls={fileControls}
        />
      </div>
      <div className="hover-glow" />
    </form>
  );
};

export default ContactForm;
