"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Maximize2, Minimize2, X, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTerminal, type TerminalLine } from "@/hooks/use-terminal";

const getTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-US", { hour12: false });
};

// Boot sequence with typing animation
const bootSequence: TerminalLine[] = [
  {
    type: "system",
    content: ">>> INITIALIZING SECURE TERMINAL v3.0.0",
    timestamp: getTimestamp(),
  },
  {
    type: "system",
    content: ">>> Loading kernel modules...",
    timestamp: getTimestamp(),
  },
  {
    type: "output",
    content: "[PASS] Cryptographic subsystem initialized",
    timestamp: getTimestamp(),
  },
  {
    type: "output",
    content: "[PASS] Network security protocols active",
    timestamp: getTimestamp(),
  },
  {
    type: "output",
    content: "[PASS] Intrusion detection system online",
    timestamp: getTimestamp(),
  },
  {
    type: "system",
    content: ">>> Connection established. Welcome, operator.",
    timestamp: getTimestamp(),
  },
  {
    type: "system",
    content: ">>> Type 'help' for available commands.",
    timestamp: getTimestamp(),
  },
];

export function Terminal() {
  const { lines, prompt, executeCommand, navigateHistory, addLine } = useTerminal({
    initialLines: [],
    username: "operator",
    hostname: "cybersec",
    currentDir: "~",
  });

  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootIndex, setBootIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Boot sequence typing animation
  useEffect(() => {
    if (isBooting && bootIndex < bootSequence.length) {
      const timer = setTimeout(() => {
        addLine(bootSequence[bootIndex]);
        setBootIndex((prev) => prev + 1);
      }, 150 + Math.random() * 100); // Slight randomness for realistic typing
      return () => clearTimeout(timer);
    } else if (bootIndex >= bootSequence.length) {
      setIsBooting(false);
    }
  }, [isBooting, bootIndex, addLine]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevCommand = navigateHistory("up");
      if (prevCommand !== null) {
        setInput(prevCommand);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextCommand = navigateHistory("down");
      if (nextCommand !== null) {
        setInput(nextCommand);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl glass cyber-glow overflow-hidden crt-flicker",
        isMaximized ? "fixed inset-4 z-50" : "h-full"
      )}
    >
      {/* Terminal Header - macOS style */}
      <div className="flex items-center justify-between border-b border-white/5 bg-black/40 px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-2">
            <button className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
            <button className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" 
            />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <TerminalIcon className="h-4 w-4 text-[#00FF41] text-glow-green" />
            <span className="text-sm font-mono font-medium text-[#00FF41]/80">
              operator@cybersec:~
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#00FF41]/10 border border-[#00FF41]/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[#00FF41] text-glow-green">
            SSH Encrypted
          </span>
        </div>
      </div>

      {/* Terminal Content with CRT scanlines */}
      <div
        ref={scrollRef}
        onClick={focusInput}
        className="relative flex-1 overflow-auto bg-[#050505] p-4 font-mono text-sm scanlines cursor-text"
      >
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3 leading-relaxed typing-animation" style={{ animationDelay: `${i * 0.05}s` }}>
            <span className="shrink-0 text-[#00FF41]/30 select-none font-mono text-xs">
              {line.timestamp}
            </span>
            <span
              className={cn(
                "font-mono",
                line.type === "input" && "text-[#00FF41] text-glow-green",
                line.type === "output" && "text-[#00FF41]/90",
                line.type === "error" && "text-[#B5179E] text-glow-purple",
                line.type === "system" && "text-[#00FF41]/70",
                line.type === "directory" && "text-[#B5179E] font-semibold text-glow-purple"
              )}
            >
              {line.type === "input" && (
                <span className="mr-2">
                  <span className="text-[#00FF41]">operator</span>
                  <span className="text-[#00FF41]/40">@</span>
                  <span className="text-[#B5179E]">cybersec</span>
                  <span className="text-[#00FF41]/40"> ~ </span>
                  <span className="text-[#00FF41]">%</span>
                  <span className="text-[#00FF41]"> </span>
                </span>
              )}
              {line.content}
            </span>
          </div>
        ))}

        {/* Input Line with Zsh-style prompt */}
        {!isBooting && (
          <div className="flex gap-3 leading-relaxed mt-2">
            <span className="shrink-0 text-[#00FF41]/30 select-none font-mono text-xs">
              {getTimestamp()}
            </span>
            <div className="flex items-center flex-1">
              <span className="mr-2 shrink-0 font-mono">
                <span className="text-[#00FF41]">operator</span>
                <span className="text-[#00FF41]/40">@</span>
                <span className="text-[#B5179E]">cybersec</span>
                <span className="text-[#00FF41]/40"> ~ </span>
                <span className="text-[#00FF41]">%</span>
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-[#00FF41] text-glow-green outline-none caret-[#00FF41] font-mono"
                spellCheck={false}
                autoFocus
              />
              <span className="terminal-cursor ml-0.5 h-4 w-2.5 bg-[#00FF41] rounded-sm" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
