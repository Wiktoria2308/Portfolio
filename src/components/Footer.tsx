import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiChevronDoubleUp } from "react-icons/hi";

const Footer: React.FC = () => {

  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (): void => {
    const scrollTop: number = window.scrollY;

    if (scrollTop > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <footer className="bg-gray-400 py-16 relative">
      <div
        id="scroll-to-top"
        className={`absolute bg-fuchsia-800 text-white cursor-pointer text-5xl p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showScrollToTop ? "show" : ""
          }`}
        onClick={handleScrollToTop}
      >
        <HiChevronDoubleUp className="absolute bg-fuchsia-800 text-white cursor-pointer text-5xl p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      </div>
      <div className="flex items-center justify-center space-x-8 mt-8">
        <a href="https://www.linkedin.com/in/wiktoria-dobrzewinska-975b32157/" target="_blank">
          <div className="icon-wrap bg-gray-300 cursor-pointer rounded-full h-16 w-16 flex items-center justify-center transition duration-300 hover:bg-fuchsia-800 hover:text-white">
            <FaLinkedinIn className="text-4xl" />
          </div>
        </a>
        <a href="https://github.com/Wiktoria2308" target="_blank">
          <div className="icon-wrap bg-gray-300 cursor-pointer rounded-full h-16 w-16 flex items-center justify-center transition duration-300 hover:bg-fuchsia-800 hover:text-white">
            <FaGithub className="text-4xl" />
          </div>
        </a>
      </div>


      <div className="text-center mt-8">
        <p className="text-lg tracking-wide"><span className="uppercase text-gray-700">Wiktoria Dobrzewinska </span><span className="text-fuchsia-800 text-2xl font-extrabold">©2023</span></p>
      </div>
            <div className="text-center mt-8">
        <img src="/mylogo.png" className="h-16 mx-auto" alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
