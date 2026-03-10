"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Maximize2, Minimize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTerminal, type TerminalLine } from "@/hooks/use-terminal";

const getTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-US", { hour12: false });
};

const initialLines: TerminalLine[] = [
  {
    type: "system",
    content: "CyberSec Terminal v2.4.1 - Secure Connection Established",
    timestamp: getTimestamp(),
  },
  {
    type: "system",
    content: "Initializing security protocols...",
    timestamp: getTimestamp(),
  },
  {
    type: "output",
    content: "[OK] Firewall status: ACTIVE",
    timestamp: getTimestamp(),
  },
  {
    type: "output",
    content: "[OK] Intrusion Detection System: ONLINE",
    timestamp: getTimestamp(),
  },
  {
    type: "output",
    content: "[OK] SSL/TLS Encryption: ENABLED",
    timestamp: getTimestamp(),
  },
  {
    type: "system",
    content: "System ready. Type 'help' for available commands.",
    timestamp: getTimestamp(),
  },
];

export function Terminal() {
  const { lines, prompt, executeCommand, navigateHistory } = useTerminal({
    initialLines,
    username: "operator",
    hostname: "cybersec",
    currentDir: "~",
  });

  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
        "flex flex-col rounded-lg border border-border bg-card cyber-glow overflow-hidden",
        isMaximized ? "fixed inset-4 z-50" : "h-full"
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            secure-terminal@cybersec
          </span>
          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-emerald-400">
            Encrypted
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="rounded p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {isMaximized ? (
              <Minimize2 className="h-3.5 w-3.5" />
            ) : (
              <Maximize2 className="h-3.5 w-3.5" />
            )}
          </button>
          <button className="rounded p-1 text-muted-foreground transition-colors hover:bg-destructive/20 hover:text-destructive">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={scrollRef}
        onClick={focusInput}
        className="relative flex-1 overflow-auto bg-background/50 p-4 font-mono text-sm scanlines cursor-text"
      >
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3 leading-relaxed">
            <span className="shrink-0 text-muted-foreground/50 select-none">
              {line.timestamp}
            </span>
            <span
              className={cn(
                line.type === "input" && "text-foreground",
                line.type === "output" && "text-foreground",
                line.type === "error" && "text-destructive",
                line.type === "system" && "text-emerald-400",
                line.type === "directory" && "text-primary font-semibold"
              )}
            >
              {line.type === "input" && (
                <span className="mr-2">
                  <span className="text-emerald-400">operator</span>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-primary">cybersec</span>
                  <span className="text-muted-foreground"> ~ </span>
                  <span className="text-yellow-400">%</span>
                  <span className="text-foreground"> </span>
                </span>
              )}
              {line.content}
            </span>
          </div>
        ))}

        {/* Input Line with Zsh-style prompt */}
        <div className="flex gap-3 leading-relaxed mt-1">
          <span className="shrink-0 text-muted-foreground/50 select-none">
            {getTimestamp()}
          </span>
          <div className="flex items-center flex-1">
            <span className="mr-2 shrink-0">
              <span className="text-emerald-400">operator</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-primary">cybersec</span>
              <span className="text-muted-foreground"> ~ </span>
              <span className="text-yellow-400">%</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-foreground outline-none caret-primary"
              spellCheck={false}
              autoFocus
            />
            <span className="terminal-cursor ml-0.5 h-4 w-2 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
