"use client";
import { benefits } from "~/constants/addText";
import { Reveal } from "~/components/ui/Reveal";

const Benefits = () => {
  return (
    <section id="benefits" className="py-10 w-[100%] scroll-mt-[80px]">
      <div className="max-w-4xl mx-auto">
        <Reveal direction="up" className="mb-12">
          <h1 className="extra-big leading-none">
            My <span className="text-blue">Benefits</span>
          </h1>
          <p className="text text-gray leading-relaxed mt-4">
            Give your memories life through a unique portrait
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              direction="up"
              delay={index * 0.1}
              className="h-full"
            >
              <div className="glass-card h-full relative overflow-hidden">
                <div className="hover-glow" />

                <div className="icon-box">
                  <img
                    alt={benefit.title}
                    src={benefit.icon}
                    className="w-6 h-6 object-contain brightness-0 invert"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text card-title mb-2">{benefit.title}</h3>
                  <p className="text text-gray">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
