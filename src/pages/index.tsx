// import Image from 'next/image';
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from '@/components/ProjectsSection';
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AboutMeSection from "@/components/AboutMeSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wikweb</title>
        <meta
          name="description"
          content="Wiktoria Dobrzewinska Portfolio Frontend developer Sweden Wikweb"
        />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
      <Navigation />
      </header>
      <main className="relative">
        <Hero />
        <AboutMeSection />
        <ProjectsSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

