"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, File, Folder, FolderOpen, Shield, Lock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileNode {
  name: string;
  type: "file" | "folder";
  status?: "secure" | "warning" | "locked";
  children?: FileNode[];
}

const fileSystem: FileNode[] = [
  {
    name: "root",
    type: "folder",
    children: [
      {
        name: "security",
        type: "folder",
        status: "secure",
        children: [
          { name: "firewall.conf", type: "file", status: "secure" },
          { name: "intrusion_detect.log", type: "file", status: "warning" },
          { name: "ssl_certs.pem", type: "file", status: "locked" },
        ],
      },
      {
        name: "logs",
        type: "folder",
        children: [
          { name: "access.log", type: "file" },
          { name: "error.log", type: "file", status: "warning" },
          { name: "audit.log", type: "file", status: "secure" },
        ],
      },
      {
        name: "network",
        type: "folder",
        status: "secure",
        children: [
          { name: "interfaces.cfg", type: "file" },
          { name: "routing_table.conf", type: "file" },
          { name: "dns_records.db", type: "file" },
        ],
      },
      {
        name: "users",
        type: "folder",
        status: "locked",
        children: [
          { name: "admin.key", type: "file", status: "locked" },
          { name: "permissions.json", type: "file", status: "secure" },
        ],
      },
      { name: "system.conf", type: "file", status: "secure" },
      { name: "boot.log", type: "file" },
    ],
  },
];

function StatusIcon({ status }: { status?: "secure" | "warning" | "locked" }) {
  if (status === "secure") {
    return <Shield className="h-3 w-3 text-[#00FF41]" />;
  }
  if (status === "warning") {
    return <AlertTriangle className="h-3 w-3 text-[#B5179E]" />;
  }
  if (status === "locked") {
    return <Lock className="h-3 w-3 text-[#B5179E]" />;
  }
  return null;
}

function TreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(depth < 2);

  const isFolder = node.type === "folder";

  return (
    <div>
      <button
        onClick={() => isFolder && setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-all duration-200",
          "hover:bg-white/5 text-white/60 hover:text-white/90",
          "focus:outline-none focus:ring-1 focus:ring-[#B5179E]/30"
        )}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {isFolder ? (
          <>
            {isOpen ? (
              <ChevronDown className="h-3.5 w-3.5 text-[#B5179E]/70" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5 text-[#B5179E]/70" />
            )}
            {isOpen ? (
              <FolderOpen className="h-4 w-4 text-[#B5179E]" />
            ) : (
              <Folder className="h-4 w-4 text-[#B5179E]/70" />
            )}
          </>
        ) : (
          <>
            <span className="w-3.5" />
            <File className="h-4 w-4 text-white/40" />
          </>
        )}
        <span className={cn(
          "flex-1 truncate text-left font-mono text-xs",
          isFolder && "text-[#B5179E]/90"
        )}>
          {node.name}
        </span>
        <StatusIcon status={node.status} />
      </button>
      {isFolder && isOpen && node.children && (
        <div>
          {node.children.map((child, i) => (
            <TreeNode key={`${child.name}-${i}`} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree() {
  return (
    <div className="flex flex-col h-full">
      {/* Header with clean sans-serif */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <Folder className="h-4 w-4 text-[#B5179E]" />
        <span className="text-xs font-sans font-semibold uppercase tracking-wider text-white/50">
          File Explorer
        </span>
      </div>
      <div className="flex-1 overflow-auto py-2">
        {fileSystem.map((node, i) => (
          <TreeNode key={`${node.name}-${i}`} node={node} />
        ))}
      </div>
      <div className="border-t border-white/5 px-4 py-2.5">
        <div className="flex items-center justify-between text-xs font-sans text-white/40">
          <span>12 files</span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-3 w-3 text-[#00FF41]" />
            <span className="text-[#00FF41]/70">8 secure</span>
          </span>
        </div>
      </div>
    </div>
  );
}
