"use client";

import { useRouter } from "next/navigation";

export const useRedirectWithDelay = (onClose: () => void) => {
  const router = useRouter();

  const handleClick = (link: string) => {
    onClose();

    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  return { handleClick };
};
