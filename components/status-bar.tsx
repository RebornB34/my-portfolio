"use client";

import { Activity, Clock, Cpu, HardDrive, Shield, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="flex items-center justify-between border-t border-border bg-card px-4 py-2">
      <div className="flex items-center gap-6">
        {/* System Load */}
        <div className="flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-xs text-muted-foreground">System Load:</span>
          <span className="text-xs font-medium text-emerald-400">Stable</span>
        </div>

        {/* Uptime */}
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs text-muted-foreground">Uptime:</span>
          <span className="text-xs font-medium text-primary">99%</span>
        </div>

        {/* CPU */}
        <div className="hidden items-center gap-2 sm:flex">
          <Cpu className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">CPU: 12%</span>
        </div>

        {/* Storage */}
        <div className="hidden items-center gap-2 md:flex">
          <HardDrive className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Storage: 234GB free</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Security Status */}
        <div className="flex items-center gap-2">
          <Shield className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-xs font-medium text-emerald-400">Protected</span>
        </div>

        {/* Network */}
        <div className="hidden items-center gap-2 sm:flex">
          <Wifi className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs text-muted-foreground">1.2 Mbps</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 font-mono">
          <span className="text-xs text-muted-foreground">{time || "--:--:--"}</span>
        </div>
      </div>
    </footer>
  );
}
