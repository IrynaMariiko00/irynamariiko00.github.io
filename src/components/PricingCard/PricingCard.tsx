import { PRICING_DETAILS } from "~/constants/modals";
import { useModalStore } from "~/store/useModalsStore";
import type { PricingCardProps } from "~/types/pricing";

const PricingCard = ({
  group: { size, dimensions, description, items, isPopular },
}: PricingCardProps) => {
  const openModal = useModalStore((state) => state.openModal);

  const handleDetails = () => {
    openModal({
      title: PRICING_DETAILS.title,
      sections: PRICING_DETAILS.sections,
      confirmButton: {
        label: "Let's go!",
        to: "/commision",
      },
    });
  };

  return (
    <div className="group relative h-full">
      <div
        className={`glass-card bg-[var(--color-glass-bg)] p-4 md:p-6 xl:p-12 pb-0 h-full flex flex-col ${isPopular ? "shadow-[0_0_15px_var(--color-blue-hover-dark),inset_0_0_20px_var(--color-glass-btn-shadow)] border-[var(--color-blue-hover-dark)] hover:border-[var(--color-blue-hover-dark)]" : ""}`}
      >
        {isPopular && (
          <div className="absolute top-0 right-0 bg-[var(--color-blue-dark)] px-2 rounded-bl-xl">
            <span className="small-text">Most Popular</span>
          </div>
        )}
        <div className="relative flex justify-between items-end mb-4">
          <h2 className="title font-normal mb-0">{size}</h2>
          <p className="small-text text-[10px] lg:text-[12px] xl:text-[14px]">
            {dimensions}
          </p>
        </div>

        <p className="text text-gray max-w-[280px] font-light mt-4 mb-8">
          {description}
        </p>

        <div className="space-y-8 relative flex-1 pb-16 flex flex-col justify-start">
          {items.map((item, i) => (
            <div key={i} className="flex items-baseline gap-4 group/item">
              <span className="text font-light">{item.label}</span>
              <div className="flex-1 border-b border-dotted border-[var(--color-gray-light)] mb-1" />
              <span className="subtitle line-h-0.5 tabular-nums">
                {item.price}
              </span>
            </div>
          ))}
        </div>
        <div className="group relative flex justify-center">
          <button
            className="glass-btn py-3 px-6 text-[1rem] mb-6"
            onClick={handleDetails}
          >
            Order Portrait
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
