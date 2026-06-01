"use client";

import { useParams, useRouter } from "next/navigation";
import { Reveal } from "~/components/ui/Reveal";
import { PORTFOLIO_ITEMS } from "~/constants/portraits";
import { ArrowLeft } from "lucide-react";

export default function PortraitPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;

  const portrait = PORTFOLIO_ITEMS.find((item) => item.id.toString() === id);

  if (!portrait)
    return (
      <p className="text-center mt-20 text-gray-400">Portrait not found</p>
    );

  const infoItems: { label: string; value: string | null }[] = [
    { label: "Material", value: portrait.category },
    { label: "Size", value: portrait.portraitSize },
    {
      label: "Description",
      value:
        portrait.description ??
        "This portrait was created using traditional pencil technique, focusing on emotion, light, and character depth.",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-24 xl:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <Reveal direction="up" delay={0.2}>
          <div className="flex justify-center xl:justify-start">
            <img
              src={portrait.img}
              alt={portrait.title}
              className="max-h-[80vh] w-auto rounded-3xl shadow-2xl object-contain"
            />
            <div className="card-overlay" />
          </div>
        </Reveal>

        <div className="flex flex-col px-6 lg:px-10 xl:px-0 justify-center space-y-6">
          <Reveal direction="right" delay={0.4}>
            <h1 className="extra-big text-blue">{portrait.title}</h1>
          </Reveal>

          {infoItems.map((item, idx) => (
            <Reveal direction="right" delay={0.6 + idx * 0.2} key={idx}>
              {item.label !== "Description" && (
                <p className="subtitle">
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.value}
                </p>
              )}
              {item.label === "Description" && (
                <>
                  <hr className="border-[var(--color-border)] my-4" />
                  <p className="text">{item.value}</p>
                </>
              )}
            </Reveal>
          ))}

          <Reveal direction="left" delay={0}>
            <button
              onClick={() => router.back()}
              className="glass-btn arrow-left mt-6"
            >
              <ArrowLeft size={18} className="arrow" />
              Back
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
