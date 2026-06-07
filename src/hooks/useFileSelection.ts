import { useState } from "react";
import { FILE_LIMITS } from "~/constants/formData";

export const useFileSelection = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const totalSize = selectedFiles.reduce((acc, file) => file.size + acc, 0);

  const fileSizeError =
    totalSize > FILE_LIMITS.MAX_SIZE_BYTES ? FILE_LIMITS.ERROR_MESSAGE : null;

  const handleDelete = (indexToDelete: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedFiles((files) =>
      files.filter((__, index) => index !== indexToDelete),
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  return {
    selectedFiles,
    handleDelete,
    handleFileChange,
    fileSizeError,
    isOverLimit: !!fileSizeError,
  };
};
