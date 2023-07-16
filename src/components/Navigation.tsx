import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import HamburgerButton from "../components/HamburgerButton";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = targetId
      ? document.getElementById(targetId.substring(2))
      : null;

    if (targetElement) {
      const navigationHeight = document.querySelector("nav")?.offsetHeight || 0;
      const offsetTop =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navigationHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`z-10 w-full top-0 fixed ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" className="h-10" alt="Logo" />
        </Link>
        <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <div
          className={isMenuOpen ? "block w-full" : "hidden"}
          id="navbar-hamburger"
        >
          <ul className="ml-auto w-max flex flex-col font-medium mt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-[1.5rem]">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#aboutme"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
                onClick={handleSmoothScroll}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#projects-section"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-right"
                onClick={handleSmoothScroll}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
                onClick={handleSmoothScroll}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
