import { ShieldCheck, Code, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
      <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyan-400 leading-snug">
            My Journey in Cybersecurity <br />&amp;&amp; Software Development
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              As a dedicated cybersecurity student, I'm passionate about protecting digital assets and building secure systems. My journey began with a fascination for how technology works and evolved into a mission to make the digital world safer.
            </p>
            <p>
              I combine theoretical knowledge from my studies with hands-on experience through personal projects, CTF competitions, and real-world applications. Every day presents new challenges and opportunities to learn in this rapidly evolving field.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Network Security", "Penetration Testing", "Incident Response", "Risk Assessment"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm border border-blue-800/50 hover:bg-blue-900/50 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-6 w-full">
          <div className="bg-[#111827] p-6 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white">Security First</h3>
            </div>
            <p className="text-gray-400">Always approaching problems with security as the foundation, not an afterthought.</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <Code className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white">Technical Excellence</h3>
            </div>
            <p className="text-gray-400">Continuously learning new technologies and methodologies to stay ahead of threats.</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg border border-white/5 hover:border-purple-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white">Community Focused</h3>
            </div>
            <p className="text-gray-400">Sharing knowledge and collaborating with the cybersecurity community.</p>
          </div>
        </div>
    </section>
  );
}
