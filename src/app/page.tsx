"use client"

import { InterestCards } from "@/components/Interests/interestCard";
import { MainNavbar } from "@/components/Navbar/Navbar";
import { ProjectTestimonials } from "@/components/projectsShowCase/projectsCard";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <>
    {/* <MainNavbar/> */}
    <div className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
      {/* <InterestCards/> */}
    
    </div>
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >

    <div>
      <div className="flex flex-col items-center justify-center mt-10 mb-5">
        <h2 className="dark:text-white text-black text-5xl">Project ShowCase</h2>
      </div>
      <ProjectTestimonials/>
    </div>
      </Vortex>
    </>
  );
}
