"use client";

import { useState, useEffect } from "react";

export function EducationBlock() {
  const [logLines, setLogLines] = useState<string[]>([]);

  const fullLog = [
    "[INFO] INITIALIZING DEGREE...",
    "[OK] B.S. COMPUTER SCIENCE",
    "[INST] UNIVERSITY NAME",
    "[GRAD] EXPECTED: 2027",
    "[GPA] 3.8/4.0",
    "[STATUS] IN_PROGRESS",
    "------------------------",
    "[LOAD] RELEVANT_COURSEWORK",
    "  > Data Structures",
    "  > Algorithms",
    "  > Systems Programming",
    "  > Machine Learning",
    "  > Database Systems",
    "------------------------",
    "[INFO] CERTIFICATIONS:",
    "  > AWS Cloud Practitioner",
    "  > Meta Frontend Dev",
    "[OK] ALL SYSTEMS NOMINAL",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullLog.length) {
        setLogLines((prev) => [...prev, fullLog[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-card p-6 h-full min-h-[280px] overflow-hidden">
      <div className="font-mono text-xs text-gray-500 mb-4">
        {"// education_log.sys"}
      </div>

      <div className="font-mono text-xs space-y-1 h-[calc(100%-2rem)] overflow-y-auto">
        {logLines.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line.startsWith("[OK]") ? (
              <span className="neon-text">{line}</span>
            ) : line.startsWith("[INFO]") || line.startsWith("[LOAD]") ? (
              <span className="text-blue-400">{line}</span>
            ) : line.startsWith("  >") ? (
              <span className="text-gray-400">{line}</span>
            ) : line.startsWith("---") ? (
              <span className="text-gray-600">{line}</span>
            ) : (
              <span className="text-white">{line}</span>
            )}
          </div>
        ))}
        <span className="neon-text cursor-blink">_</span>
      </div>
    </div>
  );
}
