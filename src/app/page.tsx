"use client"

import ContactForm from "@/components/contactForm/contactForm";
import { AboutCard } from "@/components/AboutCard/aboutCard";
import { HeroSection } from "@/components/hero/heroSection";
import { InterestCards } from "@/components/Interests/interestCard";
import { MainNavbar } from "@/components/Navbar/Navbar";
import { ProjectTestimonials } from "@/components/projectsShowCase/projectsCard";
import TechStack from "@/components/TechStack/techStack";
import { Vortex } from "@/components/ui/vortex";
import { EducationCard } from "@/components/educationCard/educationCard";

export default function Home() {
  return (
    <>
    {/* <MainNavbar/> */}
    <div className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
      {/* <InterestCards/> */}
      <MainNavbar/>
      <div>
        <HeroSection/>
      </div>
      <div>
        <h2 className="dark:text-white text-black text-5xl">Tech Stack</h2>
      </div>
    <TechStack/>
    <div>
      <div className="flex flex-col items-center justify-center mt-10 mb-5">
        <h2 className="dark:text-white text-black text-5xl">Education Details</h2>
      </div>
      <EducationCard/>
    </div>
    </div>
    {/* <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      > */}

    <div>
      <div className="flex flex-col items-center justify-center mt-10 mb-5">
        <h2 className="dark:text-white text-black text-5xl">Project ShowCase</h2>
      </div>
      <ProjectTestimonials/>
    </div>
    <div>

      <ContactForm/>
    </div>
    <div className="flex flex-col items-center justify-center mt-10 mb-5">
        <AboutCard/>
      </div>
      {/* </Vortex> */}
    </>
  );
}
