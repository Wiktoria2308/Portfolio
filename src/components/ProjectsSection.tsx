import { useRef, useEffect, useState } from "react";

const ProjectsSection: React.FC = () => {
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

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
          <div className="w-[60%]">
            <img
              src="/eco-plants.png"
              alt="Project Eco Plants"
              className={`project-image ${hoveredIndex === 0 ? "hovered" : ""}`}
              onMouseOver={() => handleMouseOver(0)}
            />
            {hoveredIndex === 0 && (
            <div className="overlay"
            onMouseLeave={handleMouseLeave}
            >
              <div className="overlay-content px-2">
                <p className="text-2xl font-bold mb-2">Tools used:</p>
                <p className="text-xl">React JS / Redux / Firebase / Stripe / Axios / Bootstrap / Sass </p>
              </div>
            </div>
            )}
          </div>
          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Eco Plants</p>
              <a href="https://eco-plants.netlify.app" target="_blank"><div className="text-center project-website">Website</div></a>
             <a href="https://github.com/Wiktoria2308/Eco-Plants" target="_blank"> <div className="text-center project-code">Code</div></a>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[1] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={1}
        >
          <div className="w-[60%]">
            <img
              src="/tasty-malmo.png"
              alt="Project Tasty Malmo"
              className={`project-image ${hoveredIndex === 1 ? "hovered" : ""}`}
              onMouseOver={() => handleMouseOver(1)}
            />
            {hoveredIndex === 1 && (
            <div className="overlay" onMouseLeave={handleMouseLeave}
            >
              <div className="overlay-content px-2">
              <p className="text-2xl font-bold mb-2">Tools used:</p>
                <p className="text-xl">React JS / React Router / Firebase / Google Maps API / Axios / Bootstrap / React Testing Library / React Dropzone</p>
              </div>
            </div>
             )}
          </div>

          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Tasty Malmö</p>
             <a href="https://tasty-malmo.netlify.app/" target="_blank"><div className="text-center project-website">Website</div></a> 
             <a href="https://github.com/Wiktoria2308/Restaurant-Cafe-Map-App" target="_blank"> <div className="text-center project-code">Code</div></a>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[2] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={2}
        >
          <div className="w-[60%]">
            {" "}
            <img
              src="/movie-db.png"
              alt="Project Movie DB"
              className={`project-image ${hoveredIndex === 2 ? "hovered" : ""}`}
              onMouseOver={() => handleMouseOver(2)}
            />
                {hoveredIndex === 2 && (
            <div className="overlay" onMouseLeave={handleMouseLeave}
            >
              <div className="overlay-content px-2">
              <p className="text-2xl font-bold mb-2">Tools used:</p>
                <p className="text-xl">React JS / Axios / Movie API / React Router / React Query </p>
              </div>
            </div>
             )}
          </div>

          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Movie DB</p>
              <a href="https://wiktoria-movie-db-api.netlify.app/" target="_blank"><div className="text-center project-website">Website</div></a>
              <a href="https://github.com/Wiktoria2308/TheMovieDB" target="_blank"><div className="text-center project-code">Code</div></a>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[3] = ref)}
          className="project-container w-full md:w-1/2"
          data-index={3}
        >
          <div className="w-[60%]">
            {" "}
            <img src="/almi.png" alt="Project Almi" 
          className={`project-image ${hoveredIndex === 3 ? "hovered" : ""}`}
           onMouseOver={() => handleMouseOver(3)}
           />
            {hoveredIndex === 3 && (
            <div className="overlay"
                onMouseLeave={handleMouseLeave}
            >
              <div className="overlay-content px-2">
              <p className="text-2xl font-bold mb-2">Tools used:</p>
                <p className="text-xl"> JavaScript / CSS / HTML / Adobe Illustrator / Bootstrap </p>
              </div>
            </div>
             )}
          </div>

          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Almi</p>
              <a href="https://my-version-of-almi-company.netlify.app/" target="_blank"><div className="text-center project-website">Website</div></a>
              <a href="https://github.com/Wiktoria2308/Almi" target="_blank"><div className="text-center project-code">Code</div></a>
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
