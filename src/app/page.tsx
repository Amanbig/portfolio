"use client"

import ContactForm from "@/components/contactForm/contactForm";
import { AboutCard } from "@/components/AboutCard/aboutCard";
import { HeroSection } from "@/components/heroSection/heroSection";
import { MainNavbar } from "@/components/Navbar/Navbar";
import { ProjectTestimonials } from "@/components/projectsShowCase/projectsCard";
import TechStack from "@/components/TechStack/techStack";
import { EducationCard } from "@/components/educationCard/educationCard";
import { ExperienceCard } from "@/components/ExperienceCard/experienceCard";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Enhanced Navigation */}
      <div className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <MainNavbar />
      </div>

      {/* Hero Section with enhanced spacing */}
      <section className="pt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <HeroSection />
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {'< Tech Stack >'}
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="flex justify-center mb-16">
            <TechStack />
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              {'</ Tech Stack >'}
            </h2>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {'< Experience >'}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="flex justify-center mb-16">
            <ExperienceCard />
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              {'</ Experience >'}
            </h2>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {'< Education >'}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="flex justify-center mb-16">
            <EducationCard />
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              {'</ Education >'}
            </h2>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="absolute inset-0 bg-dot-black/[0.2] dark:bg-dot-white/[0.2] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-transparent" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {'< Projects >'}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my work and the solutions I've built
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="flex justify-center mb-16">
            <ProjectTestimonials />
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              {'</ Projects >'}
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {'< Contact >'}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's connect and discuss opportunities together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <ContactForm />
          
          <div className="text-center mt-16">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              {'</ Contact >'}
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 lg:py-32 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {'< About >'}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know me better and my journey as a developer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="flex justify-center mb-16">
            <AboutCard />
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
              {'</ About >'}
            </h2>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}