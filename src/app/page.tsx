import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import Timeline from "@/components/Timeline/Timeline";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground overflow-hidden">
      <ScrollProgress />
      <Navbar />

      <main className="flex flex-col">
        {/* Hero has its own entrance animations */}
        <Hero />

        <div className="max-w-6xl mx-auto w-full px-4 space-y-32 pb-32 pt-8">
          <SectionReveal>
            <About />
          </SectionReveal>

          <SectionReveal>
            <Skills />
          </SectionReveal>

          <SectionReveal>
            <ProjectShowcase />
          </SectionReveal>

          <SectionReveal>
            <Timeline />
          </SectionReveal>

          <SectionReveal>
            <Contact />
          </SectionReveal>
        </div>
      </main>

      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
}
