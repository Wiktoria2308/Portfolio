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
      className={`z-10 w-full top-0 fixed ${isScrolled ? "bg-white shadow dark:bg-gray-900" : "bg-transparent"
        }`}
    >
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 ${isMenuOpen && typeof window !== "undefined" && window.innerWidth < 768
            ? "bg-white dark:bg-gray-900"
            : ""
          }`}
      >
        <Link href="/" className="flex items-center">
          <img src="/logo.png" className="h-10" alt="Logo" />
        </Link>
        <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <div
          className={isMenuOpen ? "block w-full" : "hidden"}
          id="navbar-hamburger"
        >
          <ul className="ml-auto w-max flex flex-col font-medium mt-4 rounded-md text-[1.5rem] dark:text-white">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#aboutme"
                className="block py-2 pl-7 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800"
                onClick={handleSmoothScroll}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#projects-section"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800"
                onClick={handleSmoothScroll}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800"
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
