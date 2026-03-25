interface TextPart {
  text: string;
  className?: string;
}

export interface TextSectionProps {
  title: TextPart[];
  description: string;
  link: string;
  button: string;
}

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export type FAQItemProps = {
  question: string;
  answer: string;
  category?: string;
  featured?: boolean;
};

export interface Testimonial {
  id: number;
  year: string;
  title: string;
  testimonialImage: string;
  portraitImage: string;
}
