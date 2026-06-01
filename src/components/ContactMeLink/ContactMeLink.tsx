import React from "react";
import type { TextSectionProps } from "~/types/addText";
import Link from "next/link";

const ContactMeLink: React.FC<TextSectionProps> = ({
  title,
  description,
  link,
  button,
}) => {
  return (
    <section className="flex flex-col justify-center text-center items-center py-[20px]">
      <h1 className="extra-big leading-none">
        {title.map((part, idx) => (
          <React.Fragment key={idx}>
            <span className={part.className}>{part.text}</span>{" "}
          </React.Fragment>
        ))}
      </h1>
      <h3 className="text text-gray leading-relaxed mt-4 mb-[10%] lg:mb-[5%] max-w-[80%] xl:max-w-[60%]">
        {description}
      </h3>

      <Link href={link} className="blue-btn w-fit">
        {button}
      </Link>
    </section>
  );
};

export default ContactMeLink;
