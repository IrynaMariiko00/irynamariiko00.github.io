import Link from "next/link";
import { footerSections } from "~/constants/links";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--color-gray-light)]">
      <div className="max-w-[90%] xl:max-w-screen-xl mx-auto">
        <div className="flex justify-center md:justify-between">
          <Link
            href="/"
            className="hidden md:block big-bold self-center drop-shadow-[1px_1px_10px_var(--color-blue-dark)]"
          >
            PortraitsLviv
          </Link>

          <div className="flex flex-row w-full md:gap-0 justify-between md:max-w-[50%] pt-[30px]">
            {footerSections.map((section, i) => (
              <div className="flex flex-col self-start" key={i}>
                <h5 className="small-bold">{section.title}</h5>

                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex flex-row items-center gap-0 md:gap-2 cursor-pointer text-[var(--color-primary)] hover:text-[var(--color-blue-text-light)]"
                    >
                      {IconComponent && <IconComponent />}
                      <Link
                        href={item.link}
                        className="text-[14px]"
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="lg:pl-0 small-text text-[var(--color-gray-extra-light)] pb-5">
          © 2026 PortraitsLviv
        </p>
      </div>
    </footer>
  );
};

export default Footer;
