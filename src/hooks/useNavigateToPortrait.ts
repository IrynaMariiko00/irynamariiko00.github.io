"use client";

import { useRouter } from "next/navigation";
export const useNavigateToPortrait = () => {
  const router = useRouter();

  const navigateToPortrait = (portraitId: number | string) => {
    router.push(`/portfolio/${portraitId}`);
  };

  return { navigateToPortrait };
};
