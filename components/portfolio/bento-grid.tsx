"use client";

import { HeroBlock } from "./blocks/hero-block";
import { TechStackBlock } from "./blocks/tech-stack-block";
import { ProjectBlock } from "./blocks/project-block";
import { EducationBlock } from "./blocks/education-block";
import { ContactMarquee } from "./blocks/contact-marquee";

export function BentoGrid() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Main Bento Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Hero Block - Large, spans 2 columns on desktop */}
        <div className="md:col-span-1 lg:col-span-2 lg:row-span-1">
          <HeroBlock />
        </div>

        {/* Tech Stack Block - Compact */}
        <div className="md:col-span-1 lg:col-span-1">
          <TechStackBlock />
        </div>

        {/* Active Project Block - Wide */}
        <div className="md:col-span-1 lg:col-span-2">
          <ProjectBlock />
        </div>

        {/* Education Block - Tall */}
        <div className="md:col-span-1 lg:col-span-1 lg:row-span-1">
          <EducationBlock />
        </div>
      </div>

      {/* Contact Marquee - Full Width */}
      <div className="mx-auto max-w-7xl mt-4 md:mt-6">
        <ContactMarquee />
      </div>
    </div>
  );
}
