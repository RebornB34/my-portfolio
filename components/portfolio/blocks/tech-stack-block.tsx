"use client";

export function TechStackBlock() {
  const techStack = [
    { category: "SYS.LANG", items: "TS, JS, PY, JAVA, C++" },
    { category: "SYS.FRONT", items: "REACT, NEXT.JS, VUE" },
    { category: "SYS.BACK", items: "NODE, EXPRESS, FASTAPI" },
    { category: "SYS.DB", items: "POSTGRES, MONGO, REDIS" },
    { category: "SYS.CLOUD", items: "AWS, VERCEL, DOCKER" },
    { category: "SYS.TOOLS", items: "GIT, LINUX, FIGMA" },
  ];

  return (
    <div className="bento-card p-6 h-full min-h-[280px]">
      <div className="font-mono text-xs text-gray-500 mb-4">
        {"// SYSTEM DIAGNOSTIC v2.0.27"}
      </div>
      
      <div className="font-mono text-xs uppercase tracking-wide text-gray-400 mb-3">
        [TECH_STACK_READOUT]
      </div>

      <div className="space-y-2">
        {techStack.map((tech, index) => (
          <div key={index} className="font-mono text-xs md:text-sm">
            <span className="neon-text">[{tech.category}]</span>
            <span className="text-white"> {">> "}</span>
            <span className="text-gray-300">{tech.items}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="font-mono text-xs text-gray-500">
          STATUS: <span className="neon-text">OPERATIONAL</span>
        </div>
        <div className="font-mono text-xs text-gray-500">
          UPTIME: <span className="text-white">3+ YEARS</span>
        </div>
      </div>
    </div>
  );
}
