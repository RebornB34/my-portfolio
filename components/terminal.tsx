"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Maximize2, Minimize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalLine {
  type: "input" | "output" | "error" | "system";
  content: string;
  timestamp?: string;
}

const initialLines: TerminalLine[] = [
  {
    type: "system",
    content: "CyberSec Terminal v2.4.1 - Secure Connection Established",
    timestamp: "10:23:45",
  },
  {
    type: "system",
    content: "Initializing security protocols...",
    timestamp: "10:23:46",
  },
  {
    type: "output",
    content: "[OK] Firewall status: ACTIVE",
    timestamp: "10:23:47",
  },
  {
    type: "output",
    content: "[OK] Intrusion Detection System: ONLINE",
    timestamp: "10:23:47",
  },
  {
    type: "output",
    content: "[OK] SSL/TLS Encryption: ENABLED",
    timestamp: "10:23:48",
  },
  {
    type: "system",
    content: "System ready. Type 'help' for available commands.",
    timestamp: "10:23:48",
  },
  { type: "input", content: "scan --network 192.168.1.0/24", timestamp: "10:24:12" },
  {
    type: "output",
    content: "Scanning network range 192.168.1.0/24...",
    timestamp: "10:24:12",
  },
  {
    type: "output",
    content: "Found 24 active hosts | 3 potential vulnerabilities detected",
    timestamp: "10:24:15",
  },
  { type: "input", content: "threat-level --report", timestamp: "10:25:03" },
  { type: "output", content: "Current Threat Level: LOW", timestamp: "10:25:03" },
  {
    type: "output",
    content: "No critical alerts in the last 24 hours",
    timestamp: "10:25:03",
  },
];

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  scan [--network <range>]  - Scan network for devices",
    "  status                    - Show system status",
    "  threat-level              - Display current threat assessment",
    "  logs [--tail <n>]         - View recent log entries",
    "  clear                     - Clear terminal",
    "  exit                      - Close session",
  ],
  status: [
    "System Status Report",
    "─────────────────────────────────────",
    "CPU Usage:        12%",
    "Memory:           4.2GB / 16GB",
    "Network I/O:      1.2 Mbps / 0.8 Mbps",
    "Active Sessions:  3",
    "Uptime:           14 days, 6 hours",
  ],
  "threat-level": [
    "Threat Assessment Report",
    "─────────────────────────────────────",
    "Current Level:    LOW",
    "Active Threats:   0",
    "Blocked Attacks:  147 (last 24h)",
    "Risk Score:       12/100",
  ],
  logs: [
    "[10:20:15] INFO  - User authentication successful",
    "[10:21:33] INFO  - Backup process completed",
    "[10:22:01] WARN  - High CPU usage detected (brief spike)",
    "[10:23:45] INFO  - Terminal session initiated",
    "[10:24:15] INFO  - Network scan completed",
  ],
};

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour12: false });
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = getTimestamp();

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: cmd, timestamp },
    ];

    if (trimmedCmd === "clear") {
      setLines([
        {
          type: "system",
          content: "Terminal cleared.",
          timestamp: getTimestamp(),
        },
      ]);
      return;
    }

    if (trimmedCmd === "exit") {
      setLines([
        ...newLines,
        { type: "system", content: "Session terminated.", timestamp: getTimestamp() },
      ]);
      return;
    }

    const baseCmd = trimmedCmd.split(" ")[0];
    const response = commands[baseCmd];

    if (response) {
      setLines([
        ...newLines,
        ...response.map((line) => ({
          type: "output" as const,
          content: line,
          timestamp: getTimestamp(),
        })),
      ]);
    } else {
      setLines([
        ...newLines,
        {
          type: "error",
          content: `Command not found: ${baseCmd}. Type 'help' for available commands.`,
          timestamp: getTimestamp(),
        },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
      setInput("");
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
                line.type === "input" && "text-primary",
                line.type === "output" && "text-foreground",
                line.type === "error" && "text-destructive",
                line.type === "system" && "text-emerald-400"
              )}
            >
              {line.type === "input" && (
                <span className="text-emerald-400 mr-2">{">"}</span>
              )}
              {line.content}
            </span>
          </div>
        ))}

        {/* Input Line */}
        <div className="flex gap-3 leading-relaxed mt-1">
          <span className="shrink-0 text-muted-foreground/50 select-none">
            {getTimestamp()}
          </span>
          <div className="flex items-center flex-1">
            <span className="text-emerald-400 mr-2">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-primary outline-none caret-primary"
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
