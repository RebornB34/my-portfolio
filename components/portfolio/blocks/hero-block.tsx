"use client";

import { useState, useEffect } from "react";

export function HeroBlock() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-card p-6 md:p-8 h-full min-h-[320px] flex flex-col justify-between">
      {/* Brutalist Heading */}
      <div>
        <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight">
          STUDENT.
        </h1>
        <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight">
          ENGINEER.
        </h1>
        <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight">
          BUILDER.
        </h1>
      </div>

      {/* Terminal Prompt */}
      <div className="mt-6 md:mt-8">
        <div className="font-mono text-sm md:text-base">
          <span className="neon-text">visitor@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <span className="text-white">./show_bio.sh</span>
          <span className={`neon-text ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
            _
          </span>
        </div>
        <div className="mt-3 font-mono text-xs md:text-sm text-gray-300 leading-relaxed">
          <span className="neon-text">{">>"}</span> Hi, I&apos;m Brian Bundi. CS student passionate about
          <br />
          <span className="neon-text">{">>"}</span> building elegant solutions to complex problems.
          <br />
          <span className="neon-text">{">>"}</span> Currently seeking 2027 internship opportunities.
          <br />
          <span className="neon-text">{">>"}</span> Ready to contribute, learn, and ship code.
        </div>
      </div>
    </div>
  );
}
