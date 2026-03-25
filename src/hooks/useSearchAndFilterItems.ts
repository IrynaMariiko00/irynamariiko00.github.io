import { useEffect, useMemo, useState } from "react";

export const useSearchAndFilter = <T>(
  items: T[],
  searchKeys: (keyof T)[],
  categoryKey: keyof T,
  defaultCategory: string = "all",
) => {
  const [activeId, setActiveId] = useState(defaultCategory);
  const [inputValue, setInputValue] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const clearInput = () => {
    setSearchItem("");
    setInputValue("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchItem(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        return activeId === defaultCategory || item[categoryKey] === activeId;
      })
      .filter((item) => {
        const combinedText = searchKeys
          .map((key) => String(item[key] || ""))
          .join(" ")
          .toLowerCase();

        return combinedText.includes(searchItem.toLowerCase());
      });
  }, [items, activeId, searchItem, categoryKey, defaultCategory]);

  return {
    inputValue,
    handleSearch,
    activeId,
    setActiveId,
    filteredItems,
    clearInput,
  };
};
