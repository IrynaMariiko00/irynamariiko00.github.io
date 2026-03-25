import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { PRICES } from "~/constants/prices";
import { Reveal } from "~/components/ui/Reveal";
import PricingCard from "~/components/PricingCard/PricingCard";

const PricePage = () => {
  return (
    <section className="relative min-h-screen py-36 px-6 scroll-smooth overflow-hidden">
      <LiquidBackground />

      <div className="max-w-6xl mx-auto">
        <Reveal direction="up">
          <h1 className="extra-big">
            Portrait <span className="text-blue">Pricing</span>
          </h1>
        </Reveal>

        <div className="grid my-[5%] grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {PRICES.map((group, index) => (
            <Reveal
              key={group.size}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.2}
              className="h-full"
            >
              <PricingCard group={group} />
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" delay={0.5}>
          <div className="mt-24 max-w-2xl mx-auto text-center p-8 rounded-3xl bg-white/[0.01] border border-[var(--color-border)] backdrop-blur-md">
            <p className="text-gray/50 text-xs uppercase tracking-[0.3em] mb-4">
              Terms & Delivery
            </p>
            <p className="italic font-thin">
              Shipping is calculated separately (approx. $25–$45). <br />
              Standard lead time: 2–3 weeks. A 50% deposit is required to secure
              your spot in the queue.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricePage;
