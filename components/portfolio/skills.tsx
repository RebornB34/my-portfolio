import { HTBStats } from "./htb-stats";

export function Skills() {
  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Certifications Earned", value: "5+" },
    { label: "Years of Experience", value: "2+" },
  ];

  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React / Next.js", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Network Security",
      skills: [
        { name: "Firewalls", level: 80 },
        { name: "VPN Configurations", level: 85 },
        { name: "Network Monitoring", level: 70 }
      ]
    },
    {
      title: "Ethical Hacking",
      skills: [
        { name: "Penetration Testing", level: 75 },
        { name: "Vulnerability Assessment", level: 80 },
        { name: "Exploitation", level: 65 }
      ]
    },
    {
      title: "Digital Forensics",
      skills: [
        { name: "Data Recovery", level: 70 },
        { name: "Malware Analysis", level: 60 },
        { name: "Incident Response", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-cyan-400">
          Skills &amp;&amp; Expertise
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          A breakdown of my technical proficiencies and hands-on experience in various domains of computer science and cybersecurity.
        </p>
        
        <HTBStats />
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-20 relative z-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex-1 min-w-[250px] bg-[#111827] border border-white/10 p-8 rounded-lg text-center hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 group-hover:scale-110 transition-transform inline-block">
              {stat.value}
            </div>
            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-12 relative z-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex-1 min-w-[300px] space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#111827] border border-white/5 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2 rounded-full relative overflow-hidden" 
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 animate-[marquee_2s_linear_infinite]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
