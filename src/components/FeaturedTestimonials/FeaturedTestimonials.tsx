import { ArrowRight } from "lucide-react";
import { Reveal } from "~/components/ui/Reveal";
import { Link } from "react-router-dom";
import { featuredTestimonials } from "~/constants/testimonials";

const FeaturedTestimonials = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="flex flex-col max-w-lg z-10">
          <Reveal direction="up">
            <h1 className="extra-big leading-none">
              What <span className="text-blue">My Clients</span> Say
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text text-gray leading-relaxed mt-4 mb-10">
              My portraits become part of people’s lives. Here’s what my clients
              felt when they saw their stories brought to paper.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <Link to="/testimonials" className="glass-btn w-fit arrow-right">
              See All
              <ArrowRight className="arrow" size={18} />
            </Link>
          </Reveal>
        </div>

        <div className="relative h-[500px] w-full md:w-[300px] lg:w-[500px] flex-shrink-0">
          <div className="flex flex-col gap-[15px] h-full overflow-y-auto no-scrollbar">
            {featuredTestimonials.map((item, index) => (
              <Reveal
                key={index}
                direction="up"
                delay={index * 0.1}
                className="w-full"
              >
                <div className="glass-card min-h-[255px] relative">
                  <img
                    src={item}
                    loading="lazy"
                    alt={`Testimonial ${index + 1}`}
                    className="max-w-full max-h-full rounded-lg object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="hover-glow" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
