import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import Logo from '../assets/logo.png'
import HamburgerButton from '../components/HamburgerButton'

const Navigation: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center">
          <img
            src={Logo.src}
            className="h-12"
            alt="Logo"
          />
        </Link>
        <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <div className={isMenuOpen ? "block w-full" : "hidden"} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-right"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-right"
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
