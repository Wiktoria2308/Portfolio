// import Image from 'next/image';
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from '@/components/ProjectsSection';
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
        <ProjectsSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

