export const useGetImgSrs = () => {
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }

  const getImgSrc = (image: string | StaticImageData): string => {
    if (typeof image === "string") return image;
    return image.src;
  };

  return { getImgSrc };
};
