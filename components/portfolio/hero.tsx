import { Shield, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-4 relative overflow-hidden">
      {/* Decorative gradient background glows */}
      <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="relative">
          <Shield className="w-12 h-12 text-blue-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/30 mx-auto relative group">
            {/* Using a placeholder avatar. Change to next/image later if image is available */}
            <div className="w-full h-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent" />
               <span className="text-4xl text-gray-500 font-mono group-hover:text-cyan-400 transition-colors">BB</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Brian Bundi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 font-mono tracking-wide">
            Student & Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Building secure digital solutions and exploring the frontiers of cybersecurity
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="#projects"
            className="px-8 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-8 py-3 rounded bg-white text-gray-900 hover:bg-gray-100 font-medium transition-all hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-400 hover:text-cyan-400 transition-colors">
        <a href="#about">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
