import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [heading, setHeading] = useState<string>("");
  const [heading2, setHeading2] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const [isHeadingFinished, setIsHeadingFinished] = useState<boolean>(false);
  const [isHeading2Finished, setIsHeading2Finished] = useState<boolean>(false);

  useEffect(() => {
    const headingText: string = "Hello, I'm";
    let headingIndex: number = 0;
    let currentHeading: string = "";

    const headingTimer: NodeJS.Timeout = setInterval(() => {
      if (headingIndex < headingText.length) {
        currentHeading += headingText[headingIndex];
        setHeading(currentHeading);
        headingIndex++;
      } else {
        clearInterval(headingTimer);
        setIsHeadingFinished(true);
      }
    }, 100);

    return () => clearInterval(headingTimer);
  }, []);

  useEffect(() => {
    if (isHeadingFinished) {
      const headingText: string = "Wiktoria Dobrzewinska";
      let headingIndex: number = 0;
      let currentHeading: string = "";

      const headingTimer: NodeJS.Timeout = setInterval(() => {
        if (headingIndex < headingText.length) {
          currentHeading += headingText[headingIndex];
          setHeading2(currentHeading);
          headingIndex++;
        } else {
          clearInterval(headingTimer);
          setIsHeading2Finished(true);
        }
      }, 100);

      return () => clearInterval(headingTimer);
    }
  }, [isHeadingFinished]);

  useEffect(() => {
    if (isHeading2Finished) {
      const paragraphText: string = "I'm a frontend developer";
      setParagraph(paragraphText);
    }
  }, [isHeading2Finished]);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    const targetId: string | null = event.currentTarget.getAttribute("href");
    const targetElement: Element | null = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen relative">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="absolute inset-0 flex items-center justify-center translate-y-[-5%]">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-[3rem] font-normal mb-1 text-gray-600 fade-in">
            {heading}{" "}
            <span className="text-fuchsia-800 font-semibold">{heading2}</span>
          </h1>
          {isHeadingFinished && (
            <p
              className={`text-3xl md:text-4xl lg:text-[2.8rem] text-gray-600 font-normal fade-in transition-opacity duration-1000 ease-in-out`}
              style={{
                opacity: isHeading2Finished ? 1 : 0,
              }}
            >
              {paragraph}
            </p>
          )}
          <a href="#aboutme" className="arrow-container" onClick={handleSmoothScroll}>
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
