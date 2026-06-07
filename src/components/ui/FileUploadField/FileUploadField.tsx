import { useState } from "react";
import type { FormField } from "~/types/formField";
import UploadFileIcon from "~/assets/icons/UploadFileIcon";
import { useFileSelection } from "~/hooks/useFileSelection";

const FileUploadField = ({ label }: FormField) => {
  const { selectedFiles, handleDelete, handleFileChange } = useFileSelection();
  return (
    <div className="md:col-span-2 mt-4">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray mb-4 block">
        {label.text}
      </label>
      <div className="group relative w-full h-32 border border-dashed border-[var(--color-border)] rounded-2xl flex flex-col items-start p-6 justify-center hover:bg-white/[0.02] transition-all cursor-pointer">
        <input
          type="file"
          id="file-upload"
          className="sr-only"
          multiple
          onChange={handleFileChange}
        />

        {selectedFiles.length === 0 ? (
          <label
            htmlFor="file-upload"
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
                htmlFor="file-upload"
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
    </div>
  );
};

export default FileUploadField;
