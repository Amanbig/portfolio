"use client";
import Squares from "@/components/Backgrounds/Squares/Squares";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TechStack from "@/components/TechStack/TechStack";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background squares full-screen */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#ffffff22"
          hoverFillColor="#222"
        />
      </div>

      {/* Foreground content centered */}
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pt-24">
        <Hero />

        <About />

        <TechStack />

        <section id="projects" className="mt-6 max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Project One"
            description="A short description of this project using React + Next.js."
            href="#"
          />
          <ProjectCard
            title="Project Two"
            description="Another project — shows layout, animation and responsive styles."
            href="#"
          />
        </section>

        <Contact />
      </main>
    </div>
  );
}
