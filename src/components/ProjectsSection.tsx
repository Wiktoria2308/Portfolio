import { useRef, useEffect, useState } from "react";

const ProjectsSection: React.FC = () => {
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        const projectIndex = parseInt(target.getAttribute("data-index") || "");
        if (entry.isIntersecting) {
          target.classList.add(
            projectIndex % 2 === 0 ? "animate-left" : "animate-right"
          );
        } else {
          target.classList.remove("animate-right", "animate-left");
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((projectDiv) => {
      if (projectDiv) {
        observer.observe(projectDiv);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      id="projects-section"
      className="bg-[#f5f5f5] pt-[5rem] pb-[6rem] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center justify-center mb-20">
        <hr className="border-gray-500 border-t w-1/12 my-1 mr-4" />
        <h2 className="text-3xl text-center">
          <span className="px-4 uppercase">My projects</span>
        </h2>
        <hr className="border-gray-500 border-t w-1/12 my-1 ml-4" />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap">

        <div
          ref={(ref) => (projectRefs.current[0] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={0}
        >
          {" "}
          <div className="lg:w-3/5 project-image"
            onMouseOver={() => !isMobile && handleMouseOver(0)}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
            onClick={() => isMobile && setHoveredIndex(hoveredIndex === 0 ? null : 0)}
          >

            <img
              src="/harlosa.png"
              alt="Project Skafferiet i Harlösa"
              className="rounded-[5px]"

            />
            {hoveredIndex === 0 && (
              <div className="overlay"
                onMouseLeave={handleMouseLeave}
              >
                <div className="overlay-content px-2">
                  <p className="text-xl md:text-2xl font-bold mb-2">Tools used:</p>
                  <p className="text-lg md:text-xl">React / Typescript / Tailwind / Vite </p>
                </div>
              </div>
            )}

          </div>
          <div className="lg:ml-[40px] ml-[10px]">
            <div className="w-full overflow-hidden">
              <p className="text-center lg:mb-[20px] mb-[10px] lg:text-[25px] text-[18px]">Skafferiet <br />i Harlösa</p>
              <a href="https://skafferietiharlosa.se/" target="_blank"><div className="text-center project-website text-[14px] lg:text-[17px] lg:mb-[20px] mb-[10px]">Website</div></a>

            </div>
          </div>
        </div>


        <div
          ref={(ref) => (projectRefs.current[1] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={1}
        >
          {" "}
          <div className="lg:w-3/5 project-image"
            onMouseOver={() => !isMobile && handleMouseOver(1)}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
            onClick={() => isMobile && setHoveredIndex(hoveredIndex === 1 ? null : 1)}
          >

            <img
              src="/eco-plants.png"
              alt="Project Eco Plants"
              className="rounded-[5px]"
            />
            {hoveredIndex === 1 && (
              <div className="overlay"
                onMouseLeave={handleMouseLeave}
              >
                <div className="overlay-content px-2">
                  <p className="text-xl md:text-2xl font-bold mb-2">Tools used:</p>
                  <p className="text-lg md:text-xl">React JS / Redux / Firebase / Stripe / Axios / Bootstrap / Sass </p>
                </div>
              </div>
            )}

          </div>
          <div className="lg:ml-[40px] ml-[10px]">
            <div className="w-full overflow-hidden">
              <p className="text-center lg:mb-[20px] mb-[10px] lg:text-[25px] text-[18px]">Eco Plants</p>
              <a href="https://eco-plants.netlify.app" target="_blank"><div className="text-center project-website text-[14px] lg:text-[17px] lg:mb-[20px] mb-[10px]">Website</div></a>
              <a href="https://github.com/Wiktoria2308/Eco-Plants" target="_blank"> <div className="text-center project-code text-[14px] lg:text-[17px]">Code</div></a>
            </div>
          </div>
        </div>


        <div
          ref={(ref) => (projectRefs.current[2] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={2}
        >
          <div className="lg:w-3/5 project-image"
            onMouseOver={() => !isMobile && handleMouseOver(2)}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
            onClick={() => isMobile && setHoveredIndex(hoveredIndex === 2 ? null : 2)}
          >
            {" "}
            <img
              src="/movie-db.png"
              alt="Project Movie DB"
              className="rounded-[5px]"
            />
            {hoveredIndex === 2 && (
              <div className="overlay" onMouseLeave={handleMouseLeave}
              >
                <div className="overlay-content px-2">
                  <p className="text-xl md:text-2xl font-bold mb-2">Tools used:</p>
                  <p className="text-base md:text-xl">React JS / Axios / Movie API / React Router / React Query </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:ml-[40px] ml-[10px]">
            <div className="w-full overflow-hidden">
              <p className="text-center lg:mb-[20px] mb-[10px] lg:text-[25px] text-[18px]">Movie DB</p>
              <a href="https://wiktoria-movie-db-api.netlify.app/" target="_blank"><div className="text-center project-website text-[14px] lg:text-[17px] lg:mb-[20px] mb-[10px]">Website</div></a>
              <a href="https://github.com/Wiktoria2308/TheMovieDB" target="_blank"><div className="text-center project-code text-[14px] lg:text-[17px]">Code</div></a>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[3] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={3}
        >
          <div className="lg:w-3/5 project-image" onMouseOver={() => !isMobile && handleMouseOver(3)}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
            onClick={() => isMobile && setHoveredIndex(hoveredIndex === 3 ? null : 3)}>
            <img
              src="/tasty-malmo.png"
              alt="Project Tasty Malmo"
              className="rounded-[5px]"
            />
            {hoveredIndex === 3 && (
              <div className="overlay" onMouseLeave={handleMouseLeave}
              >
                <div className="overlay-content px-2">
                  <p className="text-lg md:text-2xl font-bold mb-2">Tools used:</p>
                  <p className="text-base md:text-xl">React JS / React Router / Firebase / Google Maps API / Axios / Bootstrap / React Testing Library / React Dropzone</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:ml-[40px] ml-[10px]">
            <div className="w-full overflow-hidden">
              <p className="text-center lg:mb-[20px] mb-[10px] lg:text-[25px] text-[18px]">Tasty Malmö</p>
              <a href="https://tasty-malmo.netlify.app/" target="_blank"><div className="text-center project-website text-[14px] lg:text-[17px] lg:mb-[20px] mb-[10px]">Website</div></a>
              <a href="https://github.com/Wiktoria2308/Restaurant-Cafe-Map-App" target="_blank"> <div className="text-center project-code text-[14px] lg:text-[17px]">Code</div></a>
            </div>
          </div>
        </div>

        <div
          ref={(ref) => (projectRefs.current[4] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={4}
        >
          <div className="lg:w-3/5 project-image border border-gray rounded-[5px]"
           onMouseOver={() => !isMobile && handleMouseOver(4)}
           onMouseLeave={() => !isMobile && handleMouseLeave()}
           onClick={() => isMobile && setHoveredIndex(hoveredIndex === 4 ? null : 4)}
          >
            {" "}
            <img src="/almi.png" alt="Project Almi"
              className="rounded-[5px]"
            />
            {hoveredIndex === 4 && (
              <div className="overlay"
                onMouseLeave={handleMouseLeave}
              >
                <div className="overlay-content px-2">
                  <p className="text-xl md:text-2xl font-bold mb-2">Tools used:</p>
                  <p className="text-lg md:text-xl"> JavaScript / CSS / HTML / Adobe Illustrator / Bootstrap </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:ml-[40px] ml-[10px]">
            <div className="w-full overflow-hidden">
              <p className="text-center lg:mb-[20px] mb-[10px] lg:text-[25px] text-[18px]">Almi</p>
              <a href="https://my-version-of-almi-company.netlify.app/" target="_blank"><div className="text-center project-website text-[14px] lg:text-[17px] lg:mb-[20px] mb-[10px]">Website</div></a>
              <a href="https://github.com/Wiktoria2308/Almi" target="_blank"><div className="text-center project-code text-[14px] lg:text-[17px]">Code</div></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="https://github.com/Wiktoria2308" target="_blank" className="text-2xl underline pointer">
          More Projects{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
