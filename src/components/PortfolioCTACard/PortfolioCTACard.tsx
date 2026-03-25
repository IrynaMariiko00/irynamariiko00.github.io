import { Link } from "react-router-dom";

export const PortfolioCTACard = () => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-3xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-glass-bg)] p-8 transition-all hover:border-blue/40 flex flex-col justify-center items-center text-center">
      <div className="z-10">
        <h3 className="text-xl md:text-2xl font-light text-[var(--primary-color)] mb-2">
          Inspired by <br />{" "}
          <span className="text-blue italic">these stories?</span>
        </h3>
        <p className="text-xs uppercase tracking-widest text text-gray mb-8">
          Let's create yours
        </p>
        <Link to="/commision" className="glass-btn">
          Order a Portrait
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCTACard;
