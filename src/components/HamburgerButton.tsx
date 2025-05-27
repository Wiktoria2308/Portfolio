import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, setIsOpen, isScrolled }) => {
  const genericHamburgerLine: string = `h-[3px] w-7 my-[2px] rounded-full bg-black ${isScrolled? 'dark:bg-white' : ""} transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-[0.45rem] opacity-50 dark:opacity-80 dark:bg-white"
            : "opacity-50 dark:opacity-80"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0 dark:bg-white" : "opacity-50 dark:opacity-80"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-[45deg] -translate-y-[0.45rem] opacity-50 dark:opacity-80 dark:bg-white"
            : "opacity-50 dark:opacity-80"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
