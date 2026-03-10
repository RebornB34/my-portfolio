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
    <div className="flex h-screen flex-col bg-background">
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-foreground">CyberSec</h1>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Security Operations
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Status Indicator */}
          <div className="mr-4 hidden items-center gap-2 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-400">All Systems Operational</span>
          </div>

          {/* Notifications */}
          <button className="relative rounded p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            </span>
          </button>

          {/* Settings */}
          <button className="rounded p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Settings className="h-4 w-4" />
          </button>

          {/* User */}
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 transition-colors hover:bg-secondary/80">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="hidden text-sm text-foreground sm:inline">Admin</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed left-0 top-[57px] z-40 h-[calc(100vh-57px-41px)] w-64 border-r border-border bg-sidebar-background transition-transform duration-300 lg:static lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <FileTree />
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Terminal Area */}
        <main className="flex-1 overflow-hidden p-4">
          <Terminal />
        </main>
      </div>

      {/* Status Bar Footer */}
      <StatusBar />
    </div>
  );
}
