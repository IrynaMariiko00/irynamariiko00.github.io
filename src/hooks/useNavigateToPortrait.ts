import { useNavigate } from "react-router-dom";

export const useNavigateToPortrait = () => {
  const navigate = useNavigate();

  const navigateToPortrait = (portraitId: number) => {
    navigate(`/portfolio/${portraitId}`);
  };

  return { navigateToPortrait };
};
