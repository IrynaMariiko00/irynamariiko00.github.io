import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { Reveal } from "~/components/ui/Reveal";
import { useLoadMoreItems } from "~/hooks/useLoadMoreItems";
import { PORTFOLIO_ITEMS } from "~/constants/portraits";
import PortfolioCard from "~/components/PotrfolioCard/PortfolioCard";
import { useScrollTop } from "~/hooks/useScrollTop";
import { PortfolioCTACard } from "~/components/PortfolioCTACard";
import ContactMeLink from "~/components/ContactMeLink/ContactMeLink";
import { contactMePortfolioPage } from "~/constants/addText";

const PortfolioPage = () => {
  useScrollTop();
  const { visibleItems, showMoreItems, hasMore } = useLoadMoreItems({
    items: PORTFOLIO_ITEMS,
    initialCount: 6,
    step: 4,
  });

  return (
    <section className="relative min-h-screen pt-24 pb-12 px-6 overflow-hidden">
      <LiquidBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 xl:mb-20 gap-8">
          <Reveal direction="right" duration={0.8} className="max-w-xl">
            <h2 className="extra-big leading-none">
              My <br />
              <span className="text-blue">Portfolio</span>
            </h2>
            <p className="text text-gray leading-relaxed mt-4">
              Every face tells a story. Here is a collection of souls captured
              in graphite and charcoal.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {visibleItems.map((item, idx) => (
            <Reveal
              key={item.id}
              direction="up"
              delay={idx * 0.1}
              className={`${item.size === "large" ? "md:row-span-2" : ""}`}
            >
              {item.id === 4 ? (
                <PortfolioCTACard />
              ) : (
                <PortfolioCard item={item} />
              )}
            </Reveal>
          ))}
        </div>

        {hasMore ? (
          <div className="flex justify-center my-10">
            <button className="glass-btn" onClick={showMoreItems}>
              See More ↓
            </button>
          </div>
        ) : (
          <div className="mb-24 mt-36">
            <ContactMeLink
              title={contactMePortfolioPage.title}
              description={contactMePortfolioPage.description}
              link="/commision"
              button="Contact me"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;
