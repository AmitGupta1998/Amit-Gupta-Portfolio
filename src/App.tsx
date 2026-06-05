/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/Trust";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { OngoingProjects } from "@/components/sections/OngoingProjects";
import { APIExpertSection } from "@/components/sections/APIExpert";
import { AndroidSection } from "@/components/sections/AndroidSection";
import { ServicesSection } from "@/components/sections/Services";
import { ArchitectSuite } from "@/components/sections/ArchitectSuite";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ContentCreatorSection } from "@/components/sections/ContentCreator";
import { CertificationsSection } from "@/components/sections/Certifications";
import { ContactSection } from "@/components/sections/Contact";
import { DeveloperMindSection } from "@/components/sections/DeveloperMind";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { useScrollProgress } from "@/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Smoother reveal animations for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-blue selection:text-white">
      {/* Interactive Background Elements */}
      <CursorGlow />
      
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-blue to-brand-violet z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        <DeveloperMindSection />
        <AboutSection />
        <SkillsSection />
        <ProjectShowcase />
        <OngoingProjects />
        <ArchitectSuite />
        <APIExpertSection />
        <AndroidSection />
        <ServicesSection />
        <TestimonialsSection />
        <CertificationsSection />
        <ContentCreatorSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

