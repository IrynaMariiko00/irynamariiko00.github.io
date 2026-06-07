import { attachmentOptions } from "~/constants/formData";
import { SelectedFilesList } from "./SelectedFilesList";
import { useFileSelection } from "~/hooks/useFileSelection";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

type MessageProps = {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  photoInputRef: React.RefObject<HTMLInputElement | null>;
  fileControls: ReturnType<typeof useFileSelection>;
};

export const Message = ({
  fileInputRef,
  photoInputRef,
  fileControls,
}: MessageProps) => {
  const { selectedFiles, handleDelete, fileSizeError, isOverLimit } =
    fileControls;
  const handleButtonClick = (id: string) => {
    if (id === "file") fileInputRef?.current?.click();
    if (id === "image") photoInputRef?.current?.click();
  };

  const { pending } = useFormStatus();

  return (
    <fieldset className="w-full md:w-[55%] flex flex-col">
      <legend className="card-title mb-10 text text-gray uppercase tracking-widest">
        Your Request or Question
      </legend>

      <div className="flex flex-col gap-3 h-full">
        <label
          htmlFor="message"
          className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray"
        >
          Message
        </label>

        <div className="flex flex-col h-full rounded-3xl border border-[var(--color-border)] focus-within:border-blue transition-colors duration-300 overflow-hidden bg-transparent">
          <textarea
            id="message"
            name="userMessage"
            placeholder="Tell me about your idea..."
            className="w-full flex-1 bg-transparent min-h-[180px] text-[var(--color-primary)] p-5 outline-none resize-none placeholder:text-[var(--color-border-dark)]"
          />

          <SelectedFilesList
            files={selectedFiles}
            onDelete={handleDelete}
            errorMessage={fileSizeError}
          />

          <div className="flex justify-between items-center px-5 py-4">
            <div className="flex gap-5">
              {attachmentOptions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleButtonClick(item.id)}
                    className="text-gray text hover:text-blue transition-all transform hover:scale-110"
                    title={item.label}
                  >
                    <IconComponent size={16} />
                  </button>
                );
              })}
            </div>
            <button
              type="submit"
              disabled={isOverLimit || pending}
              className="blue-btn px-6 w-36 h-10 py-2.5 rounded-xl uppercase text-[11px] tracking-[0.1em] font-bold shadow-lg shadow-blue/20"
            >
              {pending ? <Loader2 className="animate-spin" /> : "Send Request"}
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  );
};
