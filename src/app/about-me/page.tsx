"use client";

import { ABOUT_ME_CONTENT } from "~/constants/addText";
import mePhoto from "~/assets/images/aboutMe/me.jpg";
import { Reveal } from "~/components/ui/Reveal";
import LiquidBackground from "~/components/ui/LiquidBackground/LiquidBackground";
import Link from "next/link";

export default function AboutMePage() {
  const { TITLE, TITLE_ACCENT, GREETING, NAME, PARAGRAPHS, BUTTON_TEXT } =
    ABOUT_ME_CONTENT;

  return (
    <main className="relative py-[100px] xl:py-[130px] overflow-hidden xl:min-h-screen">
      <div className="hidden md:block">
        <LiquidBackground />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
        <Reveal direction="down" duration={0.8} className="mb-4 xl:mb-20">
          <h1 className="extra-big text-center lg:text-left">
            {TITLE} <span className="text-blue">{TITLE_ACCENT}</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          <Reveal direction="right" delay={0.2} duration={0.8}>
            <div className="relative group">
              <div className="glass-border-card overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-2xl">
                <img
                  src={mePhoto.src}
                  alt="Iryna"
                  className="zoom-image transition-transform duration-1000 group-hover:scale-105 w-full object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 blur-[100px] rounded-full" />
            </div>
          </Reveal>

          <div className="flex flex-col">
            <Reveal direction="up" delay={0.3}>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                {GREETING} <span className="text-blue">{NAME}</span>
              </h3>
            </Reveal>

            <div className="space-y-8">
              {PARAGRAPHS.map((paragraph, index) => (
                <Reveal key={index} direction="up" delay={0.4 + index * 0.1}>
                  <p className="text-[var(--primary-color)] leading-[1.5] font-light tracking-wide text-xl">
                    {paragraph.text}
                    {paragraph.highlight && (
                      <span className="text-blue font-medium border-b">
                        {" "}
                        {paragraph.highlight}
                      </span>
                    )}
                    {paragraph.after && <span> {paragraph.after}</span>}

                    {paragraph.italic && (
                      <span className="block mt-6 py-3 px-5 border-l-2 italic text-sm rounded-r-lg">
                        {paragraph.italic}
                      </span>
                    )}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal
              direction="up"
              className="mt-8 xl:mt-12 flex justify-center xl:justify-start"
            >
              <Link
                href="/#contact"
                className="blue-btn inline-block text-center px-12 py-3 xl:py-4"
              >
                {BUTTON_TEXT}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
