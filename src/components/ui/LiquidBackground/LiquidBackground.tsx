const LiquidBackground = () => (
  <div className="pointer-events-none" aria-hidden="true">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-blue-bg)] rounded-full blur-[120px] max-md:blur-[60px] max-md:w-[300px] max-md:h-[300px]" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-purple-bg)] rounded-full blur-[120px] max-md:blur-[60px] max-md:w-[350px] max-md:h-[350px]" />
  </div>
);

export default LiquidBackground;
