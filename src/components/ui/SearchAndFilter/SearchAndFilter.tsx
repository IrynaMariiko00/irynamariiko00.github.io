import { useSearchAndFilter } from "~/hooks/useSearchAndFilterItems";
import { typeOfQuestion } from "~/constants/addText";
import { SearchIcon } from "lucide-react";
import CloseIcon from "~/assets/icons/CloseIcon";

type SearchAndFilterProps = Omit<
  ReturnType<typeof useSearchAndFilter>,
  "filteredItems"
>;

const SearchAndFilter = ({
  handleSearch,
  inputValue,
  setActiveId,
  activeId,
  clearInput,
}: SearchAndFilterProps) => {
  return (
    <>
      <div className="relative group mb-6 h-12 w-full glass-btn px-12 focus:border-[var(--color-blue-hover-light)] ">
        <input
          value={inputValue}
          className="flex items-center pb-1 w-full bg-transparent outline-none placeholder:text-[var(--color-border-dark)] py-1"
          onChange={handleSearch}
          placeholder="Type to search..."
        />
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-border-dark)] group-focus-within:text-[var(--color-blue-hover-dark)]  transition-colors pointer-events-none" />
        <CloseIcon
          className="absolute h-4 w-4 right-4 top-1/2 -translate-y-1/2 text-[var(--color-border-dark)]"
          onClick={clearInput}
        />
      </div>
      <div className="flex justify-start gap-4 mb-12 pl-2 items-center ">
        <p className="text-[1rem] text text-gray">Filter by:</p>
        {typeOfQuestion.map((type) => {
          const isCurrentActive = activeId === type.id;
          return (
            <button
              onClick={() => setActiveId(type.id)}
              key={type.id}
              className={`text-[0.8rem] py-2 glass-btn ${isCurrentActive ? "bg-[var(--color-border)] border-[var(--color-blue-light)] shadow-[0_0_20px_var(--color-border-hover),inset_0_0_10px_var(--color-glass)] -translate-y-[2px]" : ""}`}
            >
              {type.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SearchAndFilter;
