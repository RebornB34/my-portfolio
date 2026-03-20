"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle hash scrolling for static exports
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Scroll on initial load
    if (mounted) {
      setTimeout(handleHashScroll, 500);
    }

    // Scroll when hash changes
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [mounted]);

  return (
    <nav className="fixed top-0 w-full z-50 font-mono bg-[#e8e7e1]/90 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-[#cbc9c0] dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-[#a72334] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400">
              Brian Bundi Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#home" className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Home</Link>
              <Link href="/#about" className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">About</Link>
              <Link href="/#skills" className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Skills</Link>
              <Link href="/projects" className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Projects</Link>
              <Link href="/blog" className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Blog</Link>
              <Link href="/#contact" className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium text-sm">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-[#cbc9c0] dark:border-white/10 text-[#1a1a1a] dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center w-10 h-10"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <div className="px-4 py-1.5 border border-[#cbc9c0] dark:border-white/10 rounded font-mono text-sm text-[#a72334] dark:text-gray-300 bg-white/50 dark:bg-white/5">
              {time || "00:00:00 AM"}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-[#cbc9c0] dark:border-white/10 text-[#1a1a1a] dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center w-10 h-10"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1a1a1a] dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#e8e7e1] dark:bg-[#0B1120] border-b border-[#cbc9c0] dark:border-white/10 transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#home" onClick={() => setIsOpen(false)} className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/#about" onClick={() => setIsOpen(false)} className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/#skills" onClick={() => setIsOpen(false)} className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-[#1a1a1a] hover:text-[#a72334] dark:text-gray-300 dark:hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="text-[#a72334] dark:text-gray-300 px-3 py-2 font-mono text-sm border-t border-[#cbc9c0] dark:border-white/5 mt-2 pt-2">{time}</div>
          </div>
        </div>
      )}
    </nav>
  );
}
