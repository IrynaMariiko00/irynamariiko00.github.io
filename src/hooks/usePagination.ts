import { useState } from "react";

interface usePaginationProp<T> {
  itemsPerPage?: number;
  items: T[];
}

export const usePagination = <T>({
  itemsPerPage = 5,
  items,
}: usePaginationProp<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const countOfPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const slicedItems = items.slice(startIndex, endIndex);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    countOfPages,
    slicedItems,
    handlePageClick,
  };
};
