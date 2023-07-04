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
            projectIndex % 2 === 0 ? "animate-right" : "animate-left"
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
      className="bg-[#f5f5f5] py-[6rem] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col">
        <div
          ref={(ref) => (projectRefs.current[0] = ref)}
          className="project-container"
          data-index={0}
        >
          {" "}
          <div className="w-[40%]">
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
              <div className="overlay-content">
                <p className="text-center">Eco Plants</p>
              </div>
            </div>
            )} 
          </div>
          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Eco Plants</p>
              <div className="text-center project-website">Website</div>
              <div className="text-center project-code">Code</div>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[1] = ref)}
          className="project-container"
          data-index={1}
        >
          <div className="w-[40%]">
            <img
              src="/tasty-malmo.png"
              alt="Project Tasty Malmo"
              className={`project-image ${hoveredIndex === 1 ? "hovered" : ""}`}
              onMouseOver={() => handleMouseOver(1)}
            />
            {hoveredIndex === 1 && (
            <div className="overlay" onMouseLeave={handleMouseLeave}
            >
              <div className="overlay-content">
                <p className="text-center">Eco Plants</p>
              </div>
            </div>
             )}
          </div>

          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Tasty Malmö</p>
              <div className="text-center project-website">Website</div>
              <div className="text-center project-code">Code</div>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[2] = ref)}
          className="project-container"
          data-index={2}
        >
          <div className="w-[40%]">
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
              <div className="overlay-content">
                <p className="text-center">Eco Plants</p>
              </div>
            </div>
             )}
          </div>

          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Movie DB</p>
              <div className="text-center project-website">Website</div>
              <div className="text-center project-code">Code</div>
            </div>
          </div>
        </div>
        <div
          ref={(ref) => (projectRefs.current[3] = ref)}
          className="project-container"
          data-index={3}
        >
          <div className="w-[40%]">
            {" "}
            <img src="/almi.png" alt="Project Almi" 
          className={`project-image ${hoveredIndex === 3 ? "hovered" : ""}`}
           onMouseOver={() => handleMouseOver(3)}
           />
            {hoveredIndex === 3 && (
            <div className="overlay"
                onMouseLeave={handleMouseLeave}
            >
              <div className="overlay-content">
                <p className="text-center">Eco Plants</p>
              </div>
            </div>
             )}
          </div>

          <div className="project-info">
            <div className="w-full overflow-hidden">
              <p className="text-center project-name">Almi</p>
              <div className="text-center project-website">Website</div>
              <div className="text-center project-code">Code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
