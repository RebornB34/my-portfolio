"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

type LogList = { id: number; text: string; isCommand: boolean }[];

const PROJECTS = [
  { name: "cyber-dashboard", desc: "A React-based security operations center UI." },
  { name: "packet-sniffer", desc: "A Rust CLI tool for analyzing network packets." },
  { name: "jwt-cracker", desc: "Python script to brute-force weak JWT secrets." }
];

export function Projects() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogList>([
    { id: 1, text: "Welcome to Brian's Project Terminal v1.0.0", isCommand: false },
    { id: 2, text: "Type 'help' to see available commands.", isCommand: false }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newLogs: LogList = [...logs, { id: Date.now(), text: `brian@portfolio:~$ ${cmd}`, isCommand: true }];

    switch (cmd) {
      case "help":
        newLogs.push({ id: Date.now()+1, text: "Available commands: help, clear, projects, whoami, github", isCommand: false });
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      case "projects":
        newLogs.push({ id: Date.now()+1, text: "Featured Projects:", isCommand: false });
        PROJECTS.forEach((p, i) => {
          newLogs.push({ id: Date.now()+2+i, text: `  - ${p.name}: ${p.desc}`, isCommand: false });
        });
        break;
      case "whoami":
        newLogs.push({ id: Date.now()+1, text: "Brian Bundi - Student Developer & Cybersecurity Enthusiast", isCommand: false });
        break;
      case "github":
        newLogs.push({ id: Date.now()+1, text: "Opening GitHub... (https://github.com/RebornB34)", isCommand: false });
        window.open("https://github.com/RebornB34", "_blank");
        break;
      default:
        newLogs.push({ id: Date.now()+1, text: `Command not found: ${cmd}`, isCommand: false });
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#cbc9c0] dark:border-white/5 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#a72334] dark:font-mono dark:text-cyan-400 transition-colors">
          Featured Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
          Interact with the terminal below to explore my recent work.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-[#f0f0ea] dark:bg-[#0a0f18] rounded-xl border border-[#cbc9c0] dark:border-white/10 shadow-2xl overflow-hidden font-mono flex flex-col h-[500px] transition-colors">
        {/* Terminal Header */}
        <div className="bg-[#e8e7e1] dark:bg-[#111827] px-4 py-3 border-b border-[#cbc9c0] dark:border-white/10 flex items-center gap-2 transition-colors">
          <TerminalIcon className="w-5 h-5 text-[#1a1a1a] dark:text-gray-400 transition-colors" />
          <span className="text-sm text-[#1a1a1a] dark:text-gray-400 font-medium tracking-wider transition-colors">brian@portfolio:~</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/20 border border-green-500/50" />
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-6 overflow-y-auto text-sm sm:text-base space-y-2 relative"
          onClick={() => inputRef.current?.focus()}
        >
          {logs.map((log) => (
            <div key={log.id} className={log.isCommand ? "text-[#a72334] dark:text-cyan-400" : "text-[#1a1a1a] dark:text-gray-300"}>
              {log.text}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
            <span className="text-[#a72334] dark:text-cyan-400 transition-colors">brian@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#1a1a1a] dark:text-gray-100 caret-[#a72334] dark:caret-cyan-400 w-full transition-colors"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          <div ref={endRef} />
        </div>
      </div>
    </section>
  );
}
