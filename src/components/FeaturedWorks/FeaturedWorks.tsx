"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { ArrowRight } from "lucide-react";
import { featuredImages } from "~/constants/portraitsImages";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

const MOBILE_BREAKPOINT = 768;

const FeaturedWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="flex flex-col justify-center mx-[auto] mb-12 md:mb-24 xl:mb-0">
      <Reveal direction="up" duration={0.8}>
        <h1 className="extra-big leading-none">
          Featured <span className="text-blue">Works</span>
        </h1>
      </Reveal>
      <Reveal
        direction="up"
        delay={0.2}
        duration={0.8}
        className="flex flex-col items-start lg:flex-row lg:items-center justify-between"
      >
        <div className="flex flex-col gap-[8px] mb-[48px]">
          <h3 className="text text-gray leading-relaxed mt-4">
            Our Best Portraits
          </h3>
          <p className="text text-gray leading-relaxed">
            Check out a selection of our most loved portrait works by our
            clients.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="mb-8 lg:mb-0 glass-btn group arrow-right"
        >
          View Full Gallery
          <ArrowRight className="arrow" size={18} />
        </Link>
      </Reveal>

      <Splide
        className="relative overflow-visible max-w-[1100px] mx-auto"
        options={{
          type: "loop",
          perPage: 3,
          focus: "center",
          gap: "30px",
          autoplay: !isMobile,
          interval: 5000,
          pauseOnHover: true,
          resetProgress: false,
          breakpoints: {
            1024: {
              perPage: 1,
              gap: "10px",
              focus: "center",
              arrows: false,
            },
          },
        }}
        onMove={(splide: SplideInstance) => setActiveIndex(splide.index)}
      >
        {featuredImages.map((img, i) => {
          const isActive = i === activeIndex;
          const currentImgSrc =
            typeof img === "string" ? img : (img as StaticImageData).src;
          return (
            <SplideSlide
              key={i}
              className={`relative transition-transform duration-300 group origin-center${
                isActive ? "scale-110 z-10" : "scale-95"
              }`}
            >
              <img
                src={currentImgSrc}
                loading="lazy"
                alt={`Image ${i + 1}`}
                className="w-full xl:w-96 h-[380px] md:h-[500px] xl:h-[496px] object-cover rounded-xl"
              />
              <div className="card-overlay h-[380px] md:h-[500px] xl:h-[496px]" />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default FeaturedWorks;
