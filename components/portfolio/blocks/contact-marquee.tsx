"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function ContactMarquee() {
  const marqueeText = "SYSTEM READY // INITIATE CONTACT // OPEN TO WORK // SYSTEM READY // INITIATE CONTACT // OPEN TO WORK // ";

  return (
    <div className="bento-card p-0 overflow-hidden">
      {/* Scrolling Marquee */}
      <div className="py-4 border-b-2 border-white overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="font-mono text-sm md:text-base neon-text mx-4">
            {marqueeText}
          </span>
          <span className="font-mono text-sm md:text-base neon-text mx-4">
            {marqueeText}
          </span>
          <span className="font-mono text-sm md:text-base neon-text mx-4">
            {marqueeText}
          </span>
          <span className="font-mono text-sm md:text-base neon-text mx-4">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Contact Links */}
      <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs md:text-sm text-gray-400">
          <span className="neon-text">[CONTACT]</span> {">> "} brianbundi@email.com
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RebornB34"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-bundi-745845354"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/bundibrianx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:bundibrian36@gmail.com"
            className="p-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <a
          href="/resume.pdf"
          className="brutalist-btn px-4 py-2 font-mono text-xs md:text-sm"
        >
          DOWNLOAD_CV.pdf
        </a>
      </div>
    </div>
  );
}
