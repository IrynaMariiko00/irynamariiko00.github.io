"use client";

import ContactMeLink from "~/components/ContactMeLink/ContactMeLink";
import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import { Reveal } from "~/components/ui/Reveal";
import { contactMeTestimonialsPage } from "~/constants/addText";
import { TESTIMONIALS } from "~/constants/testimonials";
import { useGetImgSrs } from "~/hooks/useGetImgSrc";

export default function TestimonialsPage() {
  const { getImgSrc } = useGetImgSrs();

  return (
    <section className="relative min-h-screen px-6 py-36 scroll-smooth">
      <LiquidBackground />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 mb-24 relative z-10">
        <Reveal direction="up">
          <h1 className="extra-big">
            What <br />
            <span className="text-blue">My Clients</span> Say
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text text-gray max-w-2xl">
            My portraits become part of people’s lives.
            <br />
            Here’s what my clients felt when they saw their stories brought to
            paper.
          </p>
        </Reveal>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
        {TESTIMONIALS.map((item, index) => (
          <Reveal key={item.id} direction="up" delay={index * 0.1}>
            <div className="glass-card group flex flex-col md:flex-row items-stretch overflow-hidden rounded-3xl min-h-[400px] relative">
              <div className="w-full md:w-[40%] overflow-hidden rounded-2xl relative">
                <img
                  src={getImgSrc(item.portraitImage)}
                  alt="Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="absolute top-2 right-4 hidden md:block md:text-6xl lg:text-8xl font-bold text-[var(--color-border)] pointer-events-none select-none">
                {item.year}
              </span>

              <div className="w-full md:w-[60%] p-2 md:p-8 lg:p-12 flex flex-col justify-center gap-6 relative">
                <div className="space-y-1 ml-4 relative z-10">
                  <h3 className="text-xl font-light text text-gray tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-blue/50" />
                </div>

                <div className="flex items-center relative z-10">
                  <img
                    src={getImgSrc(item.testimonialImage)}
                    alt="Testimonial text"
                    className="max-w-full h-auto brightness-110 contrast-[1.02] drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-36 relative z-10">
        <ContactMeLink
          title={contactMeTestimonialsPage.title}
          description={contactMeTestimonialsPage.description}
          link="/commision"
          button="Contact me"
        />
      </div>
    </section>
  );
}
