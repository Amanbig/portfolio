"use client";
import Squares from "@/components/Backgrounds/Squares/Squares";
import FloatingElements from "@/components/FloatingElements/FloatingElements";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import BackToTop from "@/components/BackToTop/BackToTop";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Skills from "@/components/Skills/Skills";
import Process from "@/components/Process/Process";
import Timeline from "@/components/Timeline/Timeline";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Progress & Navigation */}
      <ScrollProgress />
      <BackToTop />

      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#ffffff22"
          hoverFillColor="#222"
        />
      </div>
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pt-24 space-y-32">
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

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Call to Action Section */}
        <CTA />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
