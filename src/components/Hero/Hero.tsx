import { HashLink as Link } from "react-router-hash-link";
import { Reveal } from "~/components/ui/Reveal";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-[var(--color-gray)] text-white">
      <img
        className="h-full w-full object-cover rounded-b-[16px]"
        alt="hero-page"
        src="./images/hero.png"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[40px] flex-col w-full text-center px-4">
        <Reveal direction="up" delay={0.2}>
          <h1 className="title tracking-[0.05em]">
            Portraits that tell your story
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <h3 className="title font-medium text-[12px] md:text-[14px] tracking-[0.6em] uppercase text-white/60 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20"></span>
            Handmade Only
            <span className="w-8 h-[1px] bg-white/20"></span>
          </h3>
        </Reveal>

        <Reveal direction="up" delay={0.6}>
          <Link
            smooth
            to="#benefits"
            className="blue-btn px-[20px] py-[14px] text-[16px] xl:px-[27px] xl:py-[18px] text-mont xl:text-[22px]"
          >
            Get Started
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
