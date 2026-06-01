"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "~/assets/icons/CloseIcon";
import { quickLinks } from "~/constants/links";

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full z-30 transform transition-transform duration-500 ease-in-out 
              xl:hidden flex flex-col items-center justify-center
              bg-[var(--color-mobile-menu-glass)] 
              backdrop-blur-xl 
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <button
        className="cursor-pointer absolute top-6 left-6 z-50"
        onClick={toggleMenu}
      >
        <CloseIcon className="w-6 h-6" />
      </button>
      <nav>
        <ul className="flex flex-col items-center gap-[45px] small-bold">
          {quickLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`nav-link ${pathname === item.link ? "text-blue" : ""}`}
              onClick={toggleMenu}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
