// import Image from 'next/image';
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiktoria's Portfolio</title>
        <meta
          name="description"
          content="Wiktoria Dobrzewinska Portfolio Frontend developer Sweden"
        />
      </Head>

      <main>
        <Navigation />
        <Hero />
        {/* <div className="flex items-center justify-center">
          {" "}
          <a className="link" href="#projects">
            <span className="link__arrow">
              <span></span>
              <span></span>
            </span>
            <span className="link__line"></span>
            <span className="link__text text-2xl md:text-[2rem] lg:text-[2rem]">Projects</span>
          </a>
        </div>
        <div id="projects" className="w-full h-[500px] b-gray-500"></div> */}
        <ProjectsSection />
      </main>
    </>
  );
}

{
  /* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */
}
