"use client";

import { FileTree } from "./file-tree";
import { Terminal } from "./terminal";
import { StatusBar } from "./status-bar";
import { Shield, Menu, X, Bell, Settings, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CybersecDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col bg-[#050505]">
      {/* Top Header with glass effect */}
      <header className="flex items-center justify-between border-b border-white/5 glass px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/20">
              <Shield className="h-5 w-5 text-[#00FF41]" />
            </div>
            <div>
              <h1 className="text-sm font-sans font-semibold text-white">Developer Portfolio</h1>
              <p className="text-[10px] uppercase tracking-wider text-[#00FF41]/60 font-mono">
                Security Operations
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Status Indicator */}
          <div className="mr-4 hidden items-center gap-2 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF41] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FF41]"></span>
            </span>
            <span className="text-xs text-[#00FF41] font-mono text-glow-green">Systems Online</span>
          </div>

          {/* Notifications */}
          <button className="relative rounded-lg p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#B5179E] opacity-75"></span>
            </span>
          </button>

          {/* Settings */}
          <button className="rounded-lg p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white">
            <Settings className="h-4 w-4" />
          </button>

          {/* User */}
          <button className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 transition-colors hover:bg-white/10">
            <User className="h-4 w-4 text-white/60" />
            <span className="hidden text-sm text-white/80 font-sans sm:inline">operator</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with glassmorphism */}
        <aside
          className={cn(
            "fixed left-0 top-[57px] z-40 h-[calc(100vh-57px-41px)] w-64 glass-sidebar transition-transform duration-300 lg:static lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <FileTree />
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Terminal Area */}
        <main className="flex-1 overflow-hidden p-4 bg-[#050505]">
          <Terminal />
        </main>
      </div>

      {/* Status Bar Footer */}
      <StatusBar />
    </div>
  );
}
