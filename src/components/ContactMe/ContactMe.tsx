import Link from "next/link";
import ContactForm from "../ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center scroll-mt-[80px]"
    >
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between mx-auto w-[100%]">
        <div className="flex flex-col">
          <h1 className="extra-big leading-none">
            Get in <span className="text-blue">Touch</span>
          </h1>
          <h3 className="text text-gray leading-relaxed">
            Get in touch with me — together we’ll bring your ideas to life
            <br />
            I’m always open to your suggestions and questions
          </h3>
        </div>

        <Link
          href="/commision"
          className="glass-btn h-[5%] self-start md:self-center"
        >
          Get Estimate
        </Link>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactMe;
