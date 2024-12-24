"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "../buttons/ThemeToggle";
import Image from "next/image";
import Logo from "@/public/simponia-logo.svg";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "../buttons/LanguageSwitcher";
import { useLanguage } from "@/app/context/LanguageContext";
import { usePathname } from "next/navigation";

const Header = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) return null;
  return (
    <header
      className={`
        fixed top-0 left-[50%] transform -translate-x-1/2
        w-full max-w-screen-xl sm:mt-5 mt-0
        bg-black/30 z-50 border-black/20 backdrop-blur-[15px]
        flex justify-between items-center px-4 md:px-[40px] py-4 md:py-6
        text-white rounded-none sm:rounded-xl border transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-150"}
      `}
    >
      {/* Logo */}
      <Link href="/">
        <Image src={Logo} alt="Simponia Logo" className="h-8 w-auto" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="hover:text-primary">
              {language === "ge" ? "მთავარი" : "Home"}
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-primary">
              {language === "ge" ? "პროექტის შესახებ" : "About the Project"}
            </Link>
          </li>
          <li>
            <Link href="/#location" className="hover:text-primary">
              {language === "ge" ? "მდებარეობა" : "Location"}
            </Link>
          </li>
          <li>
            <Link href="/#blog" className="hover:text-primary">
              {language === "ge" ? "ბლოგი" : "Blog"}
            </Link>
          </li>
          <li>
            <Link href="/#footer" className="hover:text-primary">
              {language === "ge" ? "კონტაქტი" : "Contact"}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Buttons and Mobile Menu Icon */}
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        {/* Hamburger / Close Icon for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation (Overlay) */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-black/90 backdrop-blur-md text-white md:hidden p-6 rounded-b-xl">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === "ge" ? "მთავარი" : "Home"}
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === "ge" ? "პროექტის შესახებ" : "About the Project"}
              </Link>
            </li>
            <li>
              <Link
                href="/#location"
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === "ge" ? "მდებარეობა" : "Location"}
              </Link>
            </li>
            <li>
              <Link
                href="/#blog"
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === "ge" ? "ბლოგი" : "Blog"}
              </Link>
            </li>
            <li>
              <Link
                href="/#footer"
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === "ge" ? "კონტაქტი" : "Contact"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
