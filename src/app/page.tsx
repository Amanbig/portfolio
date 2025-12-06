"use client";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Skills from "@/components/Skills/Skills";
import Process from "@/components/Process/Process";
import Timeline from "@/components/Timeline/Timeline";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#0d1117] text-[#c9d1d9] overflow-hidden font-mono">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-24 space-y-24 pb-20">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Stats Section */}
        <Stats />

        {/* Skills Section */}
        <Skills />

        {/* Process Section */}
        <Process />

        {/* Timeline Section */}
        <Timeline />

        {/* Enhanced Project Showcase */}
        <ProjectShowcase />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
