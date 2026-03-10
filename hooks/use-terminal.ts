"use client";

import { useState, useCallback } from "react";

export interface TerminalLine {
  type: "input" | "output" | "error" | "system" | "directory";
  content: string;
  timestamp?: string;
}

interface UseTerminalOptions {
  initialLines?: TerminalLine[];
  username?: string;
  hostname?: string;
  currentDir?: string;
}

const getTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-US", { hour12: false });
};

export function useTerminal(options: UseTerminalOptions = {}) {
  const {
    initialLines = [],
    username = "operator",
    hostname = "cybersec",
    currentDir = "~",
  } = options;

  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const prompt = `${username}@${hostname} ${currentDir} %`;

  const addLine = useCallback((line: TerminalLine) => {
    setLines((prev) => [...prev, line]);
  }, []);

  const addLines = useCallback((newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const clearTerminal = useCallback(() => {
    setLines([
      {
        type: "system",
        content: "Terminal cleared.",
        timestamp: getTimestamp(),
      },
    ]);
  }, []);

  const executeCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      const timestamp = getTimestamp();

      // Add to command history
      setCommandHistory((prev) => [...prev, trimmedInput]);
      setHistoryIndex(-1);

      // Add input line with Zsh-style prompt
      addLine({
        type: "input",
        content: trimmedInput,
        timestamp,
      });

      const [command, ...args] = trimmedInput.toLowerCase().split(/\s+/);

      switch (command) {
        case "help":
          addLines([
            {
              type: "output",
              content: "Available commands:",
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: "  help      - Display this help message",
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: "  whoami    - Display current user information",
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: "  ls        - List directory contents",
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: "  clear     - Clear terminal screen",
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: "  history   - Show command history",
              timestamp: getTimestamp(),
            },
          ]);
          break;

        case "whoami":
          addLines([
            {
              type: "output",
              content: username,
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: `uid=1000(${username}) gid=1000(${username}) groups=1000(${username}),27(sudo),44(video)`,
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: `Host: ${hostname}`,
              timestamp: getTimestamp(),
            },
            {
              type: "output",
              content: "Shell: /bin/zsh",
              timestamp: getTimestamp(),
            },
          ]);
          break;

        case "ls":
          const showDetails = args.includes("-l") || args.includes("-la") || args.includes("-al");
          const showAll = args.includes("-a") || args.includes("-la") || args.includes("-al");

          if (showDetails) {
            const directories = [
              { name: "projects", permissions: "drwxr-xr-x", size: "4.0K", date: "Mar 10 09:15" },
              { name: "certifications", permissions: "drwxr-xr-x", size: "4.0K", date: "Mar 08 14:32" },
              { name: "labs", permissions: "drwxr-xr-x", size: "4.0K", date: "Mar 09 22:47" },
            ];

            const hiddenDirs = [
              { name: ".", permissions: "drwxr-xr-x", size: "4.0K", date: "Mar 10 10:00" },
              { name: "..", permissions: "drwxr-xr-x", size: "4.0K", date: "Mar 01 08:00" },
              { name: ".config", permissions: "drwx------", size: "4.0K", date: "Feb 28 16:20" },
            ];

            addLine({
              type: "output",
              content: "total 12K",
              timestamp: getTimestamp(),
            });

            const allDirs = showAll ? [...hiddenDirs, ...directories] : directories;

            allDirs.forEach((dir) => {
              addLine({
                type: "directory",
                content: `${dir.permissions}  ${username} ${username}  ${dir.size}  ${dir.date}  ${dir.name}`,
                timestamp: getTimestamp(),
              });
            });
          } else {
            // Simple ls output - Zsh style with colors
            const folders = showAll
              ? [".config", "projects", "certifications", "labs"]
              : ["projects", "certifications", "labs"];

            addLine({
              type: "directory",
              content: folders.join("  "),
              timestamp: getTimestamp(),
            });
          }
          break;

        case "clear":
          clearTerminal();
          break;

        case "history":
          if (commandHistory.length === 0) {
            addLine({
              type: "output",
              content: "No commands in history.",
              timestamp: getTimestamp(),
            });
          } else {
            commandHistory.forEach((cmd, index) => {
              addLine({
                type: "output",
                content: `  ${(index + 1).toString().padStart(4)}  ${cmd}`,
                timestamp: getTimestamp(),
              });
            });
          }
          break;

        default:
          addLine({
            type: "error",
            content: `zsh: command not found: ${command}`,
            timestamp: getTimestamp(),
          });
          break;
      }
    },
    [username, hostname, addLine, addLines, clearTerminal, commandHistory]
  );

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (commandHistory.length === 0) return null;

      let newIndex = historyIndex;

      if (direction === "up") {
        newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      } else {
        newIndex = historyIndex === -1 ? -1 : Math.min(commandHistory.length - 1, historyIndex + 1);
        if (historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          return "";
        }
      }

      setHistoryIndex(newIndex);
      return commandHistory[newIndex] || "";
    },
    [commandHistory, historyIndex]
  );

  return {
    lines,
    prompt,
    executeCommand,
    clearTerminal,
    navigateHistory,
    commandHistory,
    addLine,
    addLines,
  };
}
