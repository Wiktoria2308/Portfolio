import { useRef, useEffect, useState } from "react";
import { GoLink } from "react-icons/go";


const ProjectsSection: React.FC = () => {
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

 const getFirstTwoSentencesFromText = (text: string): string => {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return text;
  return sentences.slice(0, 2).join(" ").trim();
};

  const projects = [
    {
      title: "Skafferiet i Harlösa",
      description: (
        <>
          A responsive and visually appealing website built with <strong>React, TypeScript, Vite, and Tailwind CSS, </strong> designed for a local catering and food service business. The site features a warm and inviting color palette that reflects the brand’s cozy atmosphere. It includes clearly organized sections such as weekly specials with an image carousel, catering services, event hosting options, and opening hours. The user-friendly navigation implemented with <strong>React Router</strong> and high-quality food photography create an engaging experience that encourages visitors to explore the menu and services. The design emphasizes readability and simplicity while maintaining a modern, welcoming aesthetic.
        </>
      ),
      descriptionText: " A responsive and visually appealing website built with React, TypeScript, Vite, and Tailwind CSS, designed for a local catering and food service business. The site features a warm and inviting color palette that reflects the brand’s cozy atmosphere. It includes clearly organized sections such as weekly specials with an image carousel, catering services, event hosting options, and opening hours. The user-friendly navigation implemented with React Routerand high-quality food photography create an engaging experience that encourages visitors to explore the menu and services. The design emphasizes readability and simplicity while maintaining a modern, welcoming aesthetic.",
      image: "/harlosa.png",
      website: "https://skafferietiharlosa.se/",
      code: null,
      tools: "React / Typescript / Tailwind / Vite"
    },
    {
      title: "Eco Plants",
      description: (
        <>
          Eco Plants is a demo e-commerce web application for plant lovers. It features <strong> user authentication</strong>, real-time <strong>product management</strong>, and secure <strong>Stripe</strong> payments. The interface is clean, modern, and fully responsive — with a soft, nature-inspired color palette, intuitive navigation, and mobile-friendly layout. Built with <strong>React, Redux </strong> for state management, <strong>Firebase</strong> for backend services, <strong>Stripe</strong> for payments, <strong>Axios</strong> for API calls, and styled using <strong>Bootstrap</strong> and <strong>Sass</strong> to ensure consistency across devices.
        </>
      ),
      descriptionText: "Eco Plants is a demo e-commerce web application for plant lovers. It features user authentication, real-time product management, and secure Stripe payments. The interface is clean, modern, and fully responsive — with a soft, nature-inspired color palette, intuitive navigation, and mobile-friendly layout. Built with React, Redux for state management, Firebase for backend services, Stripe for payments, Axios for API calls, and styled using Bootstrap and Sass to ensure consistency across devices.",
      image: "/eco-plants.png",
      website: "https://eco-plants.netlify.app",
      code: "https://github.com/Wiktoria2308/Eco-Plants",
      tools: "React / Redux / Firebase / Stripe / Axios / Bootstrap / Sass"
    },
    {

      title: "Movie DB",
      description: (<>
      Movie Database is a modern web application designed for movie enthusiasts, allowing users to browse, search, and discover detailed information about movies and TV shows. The project is built with <strong>React </strong> for the frontend and uses <strong>React Router</strong> for seamless navigation between pages. Movie data is fetched using <strong>Axios</strong> from an external <strong>Movie API</strong>, while <strong>React Query</strong> efficiently handles data caching and synchronization in real time. The intuitive interface enables users to quickly find their favorite titles, explore detailed descriptions, ratings, and trailers.
      </> ),
      descriptionText: "Movie Database is a modern web application designed for movie enthusiasts, allowing users to browse, search, and discover detailed information about movies and TV shows. The project is built with React for the frontend and uses React Router for seamless navigation between pages. Movie data is fetched using Axios from an external Movie API, while React Query efficiently handles data caching and synchronization in real time. The intuitive interface enables users to quickly find their favorite titles, explore detailed descriptions, ratings, and trailers.",
      image: "/movie-db.png",
      website: "https://wiktoria-movie-db-api.netlify.app/",
      code: "https://github.com/Wiktoria2308/TheMovieDB",
      tools: "React / Axios / Movie API / React Router / React Query"
    },
    {
      title: "Tasty Malmö",
      description: (
        <>
        Tasty Malmö is a demo web application featuring fictional restaurants and cafés around Malmö, designed to showcase location-based functionality. Built with <strong>React, React Router,</strong> and styled with <strong>Bootstrap</strong>, the app offers smooth navigation and a user-friendly interface. Regular users can log in to suggest new places, while only admins can create, approve, or edit locations. Thanks to the <strong>Google Maps API</strong>, users can view their current location, get directions, and filter results by distance. <strong>Firebase</strong> handles authentication and data storage, <strong>Axios</strong> manages API calls, <strong>Dropzone</strong> supports image uploads, and the app is tested using <strong>Testing Library</strong> to ensure reliability.
        </>
      ),
      descriptionText: "Tasty Malmö is a demo web application featuring fictional restaurants and cafés around Malmö, designed to showcase location-based functionality. Built with React, React Router, and styled with Bootstrap, the app offers smooth navigation and a user-friendly interface. Regular users can log in to suggest new places, while only admins can create, approve, or edit locations. Thanks to the Google Maps API, users can view their current location, get directions, and filter results by distance. Firebase handles authentication and data storage, Axios manages API calls, Dropzone supports image uploads, and the app is tested using Testing Library to ensure reliability.",
      image: "/tasty-malmo.png",
      website: "https://tasty-malmo.netlify.app/",
      code: "https://github.com/Wiktoria2308/Restaurant-Cafe-Map-App",
      tools: "React / React Router / Firebase / Google Maps API / Axios / Bootstrap / Testing Library / Dropzone"
    },
    {
      title: "Almi",
      description: (
        <>
        This is a custom concept version of the Almi company website, built with vanilla <strong>JavaScript, HTML, and CSS </strong>. The design is inspired by Almi’s official brand identity, using their official colors and graphic elements based on the Almi brand manual. The project focuses on layout, responsiveness, and brand-consistent styling without the use of frameworks or libraries.
        </>
      ),
      descriptionText: "This is a custom concept version of the Almi company website, built with vanilla JavaScript, HTML, and CSS. The design is inspired by Almi’s official brand identity, using their official colors and graphic elements based on the Almi brand manual. The project focuses on layout, responsiveness, and brand-consistent styling without the use of frameworks or libraries.",
      image: "/almi.png",
      website: "https://my-version-of-almi-company.netlify.app/",
      code: "https://github.com/Wiktoria2308/Almi",
      tools: "JavaScript / CSS / HTML"
    }
  ];


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
      className="bg-[#f5f5f5] dark:bg-gray-300 pt-[5rem] pb-[6rem] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center justify-center mb-20">
        <hr className="border-gray-500 border-t w-1/12 my-1 mr-4" />
        <h2 className="text-3xl text-center">
          <span className="px-4 uppercase">My projects</span>
        </h2>
        <hr className="border-gray-500 border-t w-1/12 my-1 ml-4" />
      </div>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(ref) => (projectRefs.current[index] = ref)}
            className="project-container w-full"
            data-index={index}
          >
            <div className="w-full lg:w-3/4">
              <p className="text-left lg:mb-[20px] mb-[10px] lg:text-[25px] text-[23px] font-semibold lg:font-medium">{project.title}</p>
              {project.description && (
                <div className="text-left text-[1.3rem] leading-9 relative font-medium md:font-normal">
                  {isMobile ? (
                    <>
                      {expandedDescriptions[index] ? (
                        <div>{project.descriptionText}</div>
                      ) : (
                        <div>{getFirstTwoSentencesFromText(project.descriptionText)}</div>
                      )}
                      <button
                        onClick={() =>
                          setExpandedDescriptions((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="text-fuchsia-800 mt-2 underline"
                      >
                        {expandedDescriptions[index] ? "Show less" : "Show more"}
                      </button>
                    </>
                  ) : (
                    <div>{project.description}</div>
                  )}
                </div>
              )}



              <div className="my-[30px] text-left flex gap-4 flex-wrap">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-website text-[15px] lg:text-[17px] flex items-center min-w-[8rem] font-medium"
                  >
                    <GoLink className="mr-2" />
                    Website
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-website text-[14px] lg:text-[17px] flex items-center min-w-[8rem] font-medium"
                  >
                    <GoLink className="text-[14px] lg:text-[17px] mr-2" />
                    Code
                  </a>
                )}
              </div>

              <p className="text-left text-xl my-2 font-medium text-fuchsia-900">
                {isMobile
                  ? "Tap the image to see tools used"
                  : "Hover the image to see tools used"}
              </p>

            </div>

            <div
              className="lg:w-3/4 project-image"
              onMouseOver={() => !isMobile && handleMouseOver(index)}
              onMouseLeave={() => !isMobile && handleMouseLeave()}
              onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
            >
              <img src={project.image} alt={`Project ${project.title}`} className="rounded-[5px]" />
              {hoveredIndex === index && (
                <div className="overlay" onMouseLeave={handleMouseLeave}>
                  <div className="overlay-content px-2">
                    <p className="text-xl md:text-4xl font-bold mb-2">Tools used:</p>
                    <p className="text-lg md:text-3xl">{project.tools}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

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
