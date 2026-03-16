"use client";

import { ArrowUpRight } from "lucide-react";

export function ProjectBlock() {
  return (
    <div className="bento-card p-6 md:p-8 h-full min-h-[280px] flex flex-col relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white transform rotate-45 translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white transform rotate-12 -translate-x-8 translate-y-8" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="font-mono text-xs text-gray-500 mb-2">
          {"// FEATURED_PROJECT.exe"}
        </div>

        <h2 className="font-sans font-black text-2xl md:text-3xl text-white mb-2">
          COMING SOON
        </h2>

        <p className="font-mono text-xs md:text-sm text-gray-300 mb-4 leading-relaxed flex-grow">
          Stay tuned for updates on my latest projects. I&apos;m currently working on some exciting stuff that I can&apos;t wait to share. Check back soon for sneak peeks and demos!
        </p>

        <div className="font-mono text-xs text-gray-500 mb-4">
          <span className="neon-text">[STACK]</span> Next.js / TypeScript / Prisma / WebSockets
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/RebornB34"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-btn px-4 py-2 font-mono text-xs md:text-sm inline-flex items-center gap-2"
          >
            VIEW SOURCE
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="px-4 py-2 font-mono text-xs md:text-sm border-2 border-white text-white hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
          >
            LIVE DEMO
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
