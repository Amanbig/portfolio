"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function MainNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50 px-4", className)}
    >
      <Menu setActive={setActive}>
        {/* About Me */}
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm p-4">
            <HoveredLink href="#about">Who I Am</HoveredLink>
            <HoveredLink href="#journey">My Story</HoveredLink>
            <HoveredLink href="#values">What I Believe</HoveredLink>
            <HoveredLink href="#resume">Download Resume</HoveredLink>
          </div>
        </MenuItem>

        {/* Tech Stack */}
        <MenuItem setActive={setActive} active={active} item="Tech Stack">
          <div className="grid grid-cols-2 gap-6 p-4 text-sm">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Frontend</h4>
              <div className="flex flex-col space-y-2">
                <HoveredLink href="#techstack">React & Next.js</HoveredLink>
                <HoveredLink href="#techstack">TypeScript</HoveredLink>
                <HoveredLink href="#techstack">Tailwind CSS</HoveredLink>
                <HoveredLink href="#techstack">Three.js</HoveredLink>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Backend</h4>
              <div className="flex flex-col space-y-2">
                <HoveredLink href="#techstack">Node.js</HoveredLink>
                <HoveredLink href="#techstack">Python</HoveredLink>
                <HoveredLink href="#techstack">Databases</HoveredLink>
                <HoveredLink href="#techstack">Cloud Services</HoveredLink>
              </div>
            </div>
          </div>
        </MenuItem>

        {/* Experience & Education */}
        <MenuItem setActive={setActive} active={active} item="Background">
          <div className="flex flex-col space-y-6 text-sm p-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Professional Experience</h4>
              <HoveredLink href="#experience">Work History</HoveredLink>
              <HoveredLink href="#experience">Key Achievements</HoveredLink>
              <HoveredLink href="#experience">Skills Developed</HoveredLink>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Education</h4>
              <HoveredLink href="#education">Academic Background</HoveredLink>
              <HoveredLink href="#education">Certifications</HoveredLink>
              <HoveredLink href="#education">Continuous Learning</HoveredLink>
            </div>
          </div>
        </MenuItem>

        {/* Projects */}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="grid grid-cols-2 gap-6 p-4 text-sm">
            <ProductItem
              title="E-Commerce Platform"
              href="#projects"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&q=80"
              description="Full-stack e-commerce solution with modern UI and secure payments"
            />
            <ProductItem
              title="Task Management App"
              href="#projects"
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&q=80"
              description="Collaborative project management tool with real-time updates"
            />
            <ProductItem
              title="Portfolio Showcase"
              href="#projects"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80"
              description="Custom portfolio websites with animations and modern design"
            />
            <ProductItem
              title="Mobile Application"
              href="#projects"
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&q=80"
              description="Cross-platform mobile app with native performance"
            />
          </div>
        </MenuItem>

        {/* Contact */}
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-6 text-sm p-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Get In Touch</h4>
              <HoveredLink href="#contact">Contact Form</HoveredLink>
              <HoveredLink href="mailto:your.email@example.com">Send Email</HoveredLink>
              <HoveredLink href="#contact">Schedule a Call</HoveredLink>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Connect</h4>
              <HoveredLink href="https://github.com/yourusername">GitHub</HoveredLink>
              <HoveredLink href="https://linkedin.com/in/yourprofile">LinkedIn</HoveredLink>
              <HoveredLink href="https://twitter.com/yourusername">Twitter</HoveredLink>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}