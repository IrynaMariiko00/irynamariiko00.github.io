"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { quickLinks } from "~/constants/links";
import BurgerMenuIcon from "~/assets/icons/BurgerMenuIcon";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Отримуємо поточний шлях

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 0);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const preventDefault = (e: Event) => {
      if (isMenuOpen) e.preventDefault();
    };

    if (isMenuOpen) {
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("touchmove", preventDefault, { passive: false });
    } else {
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
    }

    return () => {
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`h-20 w-full fixed z-20 ${
        isScrolled
          ? "bg-[var(--color-bg)] border-b border-[var(--color-gray-light)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center h-full justify-between px-8 xl:px-0">
        <Link
          href="/"
          className="small-bold pr-[40px] drop-shadow-[1px_1px_10px_var(--color-blue-dark)]"
        >
          PortraitsLviv
        </Link>

        <nav className="hidden xl:flex">
          <ul className="flex gap-[57px] small-bold">
            {quickLinks.map((item) => (
              <Link key={item.link} href={item.link} className="nav-link">
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>

        <Link href="/commision" className="glass-btn hidden xl:flex">
          Get Your Portrait
        </Link>

        <div className="xl:hidden">
          <button
            className={`cursor-pointer transition-all duration-200 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            onClick={toggleMenu}
          >
            <BurgerMenuIcon />
          </button>
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
