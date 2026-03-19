import { Terminal } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-cyan-400">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work in web development, cybersecurity tools, and system engineering.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-16 bg-[#111827] rounded-xl border border-dashed border-gray-600/50 hover:border-cyan-500/50 transition-colors">
        <Terminal className="w-16 h-16 text-gray-600 mb-6" />
        <h3 className="text-2xl font-semibold text-gray-300 mb-2">Coming Soon</h3>
        <p className="text-gray-500 text-center max-w-md">
          I'm currently updating my portfolio with my latest projects. Check back soon for deep dives into my recent security research and full-stack applications!
        </p>
      </div>
    </section>
  );
}
