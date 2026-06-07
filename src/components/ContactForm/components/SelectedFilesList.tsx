import { AlertCircle } from "lucide-react";

interface Props {
  files: File[];
  onDelete: (index: number, e: React.MouseEvent) => void;
  errorMessage?: string | null;
}

export const SelectedFilesList = ({ files, onDelete, errorMessage }: Props) => {
  if (files.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 px-5 pt-4 pb-1">
      <div className="flex flex-wrap gap-2 ">
        {files.map((file, index) => (
          <div
            key={`${file.name}-${index}`}
            className="flex flex-row relative p-3 overflow-visible glass-card group"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text text-gray truncate max-w-[120px]">
                {file.name}
              </span>
              <span className="text-[8px] text text-gray uppercase">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => onDelete(index, e)}
              className="absolute pb-1 top-[-7px] right-[-7px] bg-[var(--color-border-dark)] text-[var(--primary-color)] w-5 h-5 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <span className="leading-none text-[1rem]">×</span>
            </button>
          </div>
        ))}
      </div>
      {errorMessage && (
        <div className="flex items-center gap-2 text-red-400 animate-in slide-in-from-left-2 duration-300">
          <AlertCircle size={12} className="shrink-0" />
          <p className="extra-small-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
