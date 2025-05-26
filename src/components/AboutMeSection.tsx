import React from "react";

const AboutMeSection: React.FC = () => {
  return (
    <div className="bg-gray-200 pt-20 pb-32" id="aboutme">
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-10 lg:mb-20 ">
        <hr className="border-gray-500 border-t w-1/12 my-1 mr-4" />
        <h2 className="text-3xl text-center">
          <span className="px-4 uppercase">About me</span>
        </h2>
        <hr className="border-gray-500 border-t w-1/12 my-1 ml-4" />
      </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-1/3 lg:w-1/2 mx-auto">
              <img src="/me.jpeg" alt="my image" />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-[1.4rem] text-gray-800 leading-relaxed mb-6">
              👋 Hey there! I'm a frontend developer with a passion for creating modern and interactive web experiences. I specialize in <strong>JavaScript, Typescript, HTML, CSS</strong> and popular frameworks like <strong>React, Tailwind, Next.js</strong> and more.
            </p>
            <p className="text-[1.4rem] text-gray-800 leading-relaxed mb-6">
              ✨ I believe in the power of code to bring ideas to life. I'm constantly exploring new technologies and staying up-to-date with the latest trends to deliver cutting-edge solutions. My goal is to build intuitive user interfaces that provide a seamless and enjoyable experience for users.
            </p>
            <p className="text-[1.4rem] text-gray-800 leading-relaxed">
            🤝 Let's collaborate on innovative projects and create remarkable web solutions together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
