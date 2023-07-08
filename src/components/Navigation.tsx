import Link from "next/link";
import React, { useState } from "react";
import HamburgerButton from '../components/HamburgerButton'

const Navigation: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  

  return (
    <nav className="relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link href="#" className="flex items-center">
          <img
            src='/logo.png'
            className="h-10"
            alt="Logo"
          />
        </Link>
        <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <div className={isMenuOpen ? "block w-full" : "hidden"} id="navbar-hamburger">
          <ul className="ml-auto w-max flex flex-col font-medium mt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-[1.5rem]">
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#projects-section"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-right"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
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
