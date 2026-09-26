import type { FormField } from "~/types/formField";
import UploadFileIcon from "~/assets/icons/UploadFileIcon";
import { AlertCircle } from "lucide-react";

type FileUploadFieldProps = FormField & {
  selectedFiles: File[];
  handleDelete: (index: number, e: React.MouseEvent) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileSizeError: string | null;
};

const FileUploadField = ({
  label,
  input,
  selectedFiles,
  handleDelete,
  handleFileChange,
  fileSizeError,
}: FileUploadFieldProps) => {
  return (
    <div className="mt-4">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray mb-4 block">
        {label.text}
      </label>
      <div className="group relative w-full h-32 border border-dashed border-[var(--color-border)] rounded-2xl flex flex-col items-start p-6 justify-center hover:bg-white/[0.02] transition-all cursor-pointer">
        <input
          type={input.type}
          id={input.id}
          className="sr-only"
          multiple
          accept={input.accept}
          onChange={handleFileChange}
        />

        {selectedFiles.length === 0 ? (
          <label
            htmlFor={input.id}
            className="flex flex-col items-center justify-center w-full h-32 cursor-pointer group"
          >
            <UploadFileIcon />
            <p className="small-text text-[var(--color-border-dark)]">
              Upload your photos (PNG, JPG)
            </p>
          </label>
        ) : (
          <div className="flex gap-6">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative group/item w-24 h-24">
                <div className="w-full h-full rounded-lg overflow-hidden border border-[var(--color-border)]">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={(e) => handleDelete(index, e)}
                  type="button"
                  className="absolute pb-1 top-[-10px] right-[-10px] bg-[var(--color-border-dark)] text-[var(--primary-color)] w-6 h-6 rounded-full flex items-center justify-center transition-all opacity-0 group-hover/item:opacity-100"
                >
                  <span className="leading-none text-[1rem]">×</span>
                </button>
              </div>
            ))}
            {selectedFiles.length < 5 && (
              <label
                htmlFor={input.id}
                className="w-24 h-24 border border-dashed border-[var(--color-border)] rounded-xl pb-2 flex flex-col items-center justify-center hover:bg-white/[0.05] hover:border-blue/50 transition-all cursor-pointer group"
              >
                <span className="text-[1.5rem] text-[var(--color-border-dark)] group-hover:text-blue">
                  +
                </span>
                <span className="text-[0.7rem] text-[var(--color-border-dark)] uppercase tracking-tighter">
                  Add more
                </span>
              </label>
            )}
          </div>
        )}
      </div>
      {fileSizeError && (
        <div className="flex items-center gap-2 text-red-400 animate-in slide-in-from-left-2 duration-300">
          <AlertCircle size={12} className="shrink-0" />
          <p className="extra-small-text">{fileSizeError}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadField;
