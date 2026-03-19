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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-cyan-400">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interact with the terminal below to explore my recent work.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-[#0a0f18] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono flex flex-col h-[500px]">
        {/* Terminal Header */}
        <div className="bg-[#111827] px-4 py-3 border-b border-white/10 flex items-center gap-2">
          <TerminalIcon className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-400 font-medium tracking-wider">brian@portfolio:~</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-6 overflow-y-auto text-sm sm:text-base space-y-2 relative"
          onClick={() => inputRef.current?.focus()}
        >
          {logs.map((log) => (
            <div key={log.id} className={log.isCommand ? "text-cyan-400" : "text-gray-300"}>
              {log.text}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
            <span className="text-cyan-400">brian@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-100 caret-cyan-400 w-full"
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
