import { Shield, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-4 relative overflow-hidden transition-colors duration-300">
      {/* Decorative gradient background glows */}
      <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-[#a72334]/10 dark:bg-blue-600/20 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[#4dd0e1]/30 dark:bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="relative">
          <Shield className="w-12 h-12 text-[#a72334] dark:text-blue-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(167,35,52,0.4)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all" />
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#cbc9c0] dark:border-blue-500/30 mx-auto relative group transition-colors">
            {/* Using a placeholder avatar. Change to next/image later if image is available */}
            <div className="w-full h-full bg-[#f0f0ea] dark:bg-slate-800 flex items-center justify-center relative overflow-hidden transition-colors">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#a72334]/10 dark:from-blue-600/40 to-transparent transition-colors" />
               <span className="text-4xl text-[#1a1a1a] dark:text-gray-500 font-mono group-hover:text-[#a72334] dark:group-hover:text-cyan-400 transition-colors">BB</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="font-serif text-[#a72334] dark:font-sans dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500 transition-all">
              Brian Bundi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] dark:text-gray-100 font-mono tracking-wide transition-colors">
            Student & Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400 transition-colors">
            Building secure digital solutions and exploring the frontiers of cybersecurity
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link 
            href="/projects"
            className="px-8 py-3 rounded bg-[#a72334] hover:bg-[#851c2a] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(167,35,52,0.4)] dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            View My Projects
          </Link>
          <a
            href="/resume.pdf"
            className="px-8 py-3 rounded bg-[#1a1a1a] text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-medium transition-all hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-[#a72334] dark:text-gray-400 hover:text-[#851c2a] dark:hover:text-cyan-400 transition-colors">
        <Link href="/#about">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
}
