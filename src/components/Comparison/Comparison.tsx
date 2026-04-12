import { Reveal } from "../ui/Reveal";

const Comparison = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-24 items-center">
        <div className="xl:col-span-5 flex flex-col gap-6">
          <Reveal direction="left" duration={0.8}>
            <h2 className="extra-big mt-2">
              Compare {""}
              <span className="text-blue">the result</span>
            </h2>
          </Reveal>

          <Reveal direction="left" delay={0.2} duration={0.8}>
            <div className="space-y-4 xl:max-w-md">
              <p className="text text-gray leading-relaxed mt-4 mb-4 md:mb-10">
                Feel the difference between a regular shot and a hand-drawn
                masterpiece. We preserve the soul of the photo while adding
                artistic depth.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="xl:col-span-7 w-full">
          <Reveal direction="right" duration={1}>
            <div className="relative group rounded-2xl overflow-hidden border border-[var(--color-border-dark)] shadow-2xl leading-[0]">
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="bg-black/40 backdrop-blur-md text-[var(--primary-color)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Original
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="bg-blue/60 backdrop-blur-md text-[var(--primary-color)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Hand-drawn
                </span>
              </div>
              {/* @ts-expect-error: Web component definition is missing in JSX types */}
              <img-comparison-slider className="w-full outline-none">
                <img
                  slot="first"
                  src="/images/comparison/img_1-before.jpg"
                  alt="Before"
                  loading="lazy"
                  className="w-full"
                />
                <img
                  slot="second"
                  src="/images/comparison/img_1-after.jpg"
                  alt="After"
                  loading="lazy"
                  className="w-full"
                />
                {/* @ts-expect-error: Web component definition is missing in JSX types */}
              </img-comparison-slider>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
