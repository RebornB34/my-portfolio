"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Brian Bundi Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Home</Link>
              <Link href="/#about" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">About</Link>
              <Link href="/#skills" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Skills</Link>
              <Link href="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Projects</Link>
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Blog</Link>
              <Link href="/#contact" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="px-4 py-1.5 border border-white/10 rounded font-mono text-sm text-gray-300 bg-white/5">
              {time || "00:00:00 AM"}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1120] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#home" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/#about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/#skills" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="/projects" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="text-gray-300 px-3 py-2 font-mono text-sm border-t border-white/5 mt-2 pt-2">{time}</div>
          </div>
        </div>
      )}
    </nav>
  );
}
