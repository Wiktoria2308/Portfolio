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
      className={`z-10 w-full top-0 fixed ${isScrolled || isMenuOpen ? "bg-white shadow dark:bg-gray-600" : "bg-transparent"
        }`}
    >
      <div
        className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-5 px-4 md:px-7 lg:px-0"
      >

        <Link href="/" className="flex items-center">
          {/* Light mode */}
          <img
            src="/mylogo.png"
            className="w-10 lg:w-14 block dark:hidden"
            alt="Logo"
          />

          {/* Dark mode */}
          {isMenuOpen || isScrolled ? (
            <img
              src="/mylogo_white.png"
              className="w-10 lg:w-14 hidden dark:block"
              alt="Logo White"
            />
          ) : (
            <img
              src="/mylogo.png"
              className="w-10 lg:w-14 hidden dark:block"
              alt="Logo Black in Dark Mode"
            />
          )}
        </Link>
        
        <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isScrolled={isScrolled} />


        <div
          className={isMenuOpen ? "block w-full" : "hidden"}
          id="navbar-hamburger"
        >
          <ul className="ml-auto w-max flex flex-col font-medium mt-4 rounded-md text-[1.5rem]">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800  dark:text-white dark:opacity-80"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#aboutme"
                className="block py-2 pl-7 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800  dark:text-white dark:opacity-80"
                onClick={handleSmoothScroll}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#projects-section"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800  dark:text-white dark:opacity-80"
                onClick={handleSmoothScroll}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 text-right dark:hover:bg-gray-800  dark:text-white dark:opacity-80"
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
