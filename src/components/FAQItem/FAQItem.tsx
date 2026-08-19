import type React from "react";
import { useState } from "react";
import type { FAQItemProps } from "~/types/addText";

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="glass-card group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex justify-between">
        <h3 className="subtitle transition-colors duration-300 group-hover:text-[var(--color-extra-light-blue)]">
          {question}
        </h3>
        <button className="relative w-12 h-12 flex items-center justify-center group">
          <span className="absolute w-[16px] h-[2px] bg-[var(--color-primary)] rounded transition-all duration-300"></span>
          <span className="absolute w-[2px] h-[16px] bg-[var(--color-primary)] rounded transition-all duration-300 group-hover:rotate-90 origin-center"></span>
        </button>
      </div>

      <p
        dangerouslySetInnerHTML={{ __html: answer }}
        className={`transition-all duration-300 overflow-hidden text ${
          isOpen ? "opacity-100 max-h-96 mt-2" : "opacity-0 max-h-0"
        }`}
      />
      <div className="hover-glow" />
    </li>
  );
};

export default FAQItem;
