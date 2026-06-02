"use client";

import { Reveal } from "~/components/ui/Reveal";
import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { questions } from "~/constants/addText";
import FAQItem from "~/components/FAQItem/FAQItem";
import { useSearchAndFilter } from "~/hooks/useSearchAndFilterItems";
import SearchAndFilter from "~/components/ui/SearchAndFilter/SearchAndFilter";
import BlankCanvas from "~/components/ui/BlankCanvas/BlankCanvas";
import { usePagination } from "~/hooks/usePagination";
import ReactPaginate from "react-paginate";

export default function FAQPage() {
  const { filteredItems, ...searchProps } = useSearchAndFilter(
    questions,
    ["question", "answer"],
    "category",
  );

  const { countOfPages, slicedItems, handlePageClick } = usePagination({
    items: filteredItems,
    itemsPerPage: 4,
  });

  return (
    <section className="relative min-h-screen py-24 xl:py-36 px-6 scroll-smooth overflow-hidden">
      <div className="hidden md:block">
        <LiquidBackground />
      </div>
      <div className="mx-auto relative z-10 max-w-6xl">
        <div className="mb-16">
          <Reveal direction="up">
            <h1 className="extra-big leading-tight">
              Curious about <br />
              <span className="text-blue text-shadow-blue">the process?</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text text-gray mt-6 max-w-xl">
              Everything you need to know about getting your custom portrait,
              from photo selection to worldwide shipping.
            </p>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.4}>
          <SearchAndFilter {...searchProps} />
        </Reveal>

        {filteredItems.length !== 0 ? (
          <ul className="flex flex-col gap-4 mb-24">
            {slicedItems.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <FAQItem question={item.question} answer={item.answer} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <BlankCanvas />
        )}
      </div>
      {countOfPages > 1 && (
        <ReactPaginate
          pageCount={countOfPages}
          onPageChange={handlePageClick}
          containerClassName="flex gap-2 justify-center relative z-20"
          pageClassName="px-4 py-2 border border-[var(--color-border)] rounded-xl"
          activeClassName="bg-[var(--color-glass-bg)] text-[var(--primary-color)]"
          previousLabel={
            <span className="text text-gray text-3xl flex items-center pb-2">
              ‹
            </span>
          }
          nextLabel={
            <span className="text text-gray text-3xl flex items-center pb-2">
              ›
            </span>
          }
        />
      )}
    </section>
  );
}
