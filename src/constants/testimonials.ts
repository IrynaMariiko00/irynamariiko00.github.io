import type { Testimonial } from "~/types/addText";
export const featuredTestimonials: string[] = [];

for (let i = 1; i < 5; ++i)
  featuredTestimonials.push(`./images/featuredTestimonials/${i}.png`);

export const TESTIMONIALS_DATA = [
  { year: "2019", title: "A Heartfelt Surprise:" },
  { year: "2024", title: "Captured Romance:" },
  { year: "2018", title: "The Gift of Friendship:" },
  { year: "2016", title: "A Sibling's Bond:" },
];

export const TESTIMONIALS: Testimonial[] = TESTIMONIALS_DATA.map(
  (item, index) => {
    const id = index + 1;
    return {
      id,
      year: item.year,
      title: item.title,
      testimonialImage: `/images/featuredTestimonials/${id}.png`,
      portraitImage: `/images/testimonials/portrait_${id}.jpg`,
    };
  },
);
