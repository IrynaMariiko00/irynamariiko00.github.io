import { useState } from "react";
import type { paginationItemsProps } from "~/types/paginationItems";

export const useLoadMoreItems = <T>({
  items,
  initialCount = 6,
  step = 4,
}: paginationItemsProps<T>) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleItems = items.slice(0, visibleCount);

  const showMoreItems = () => {
    setVisibleCount((prev) => prev + step);
  };

  const hasMore = visibleCount < items.length;

  return { visibleItems, showMoreItems, hasMore };
};
