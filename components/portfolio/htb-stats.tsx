import { Target, Trophy, Crosshair, Award } from "lucide-react";
import { getHTBProfile } from "@/lib/htb";
import { HTBActivityPulse } from "./htb-activity-pulse";



export async function HTBStats() {
  const profile = await getHTBProfile();
  
  if (!profile) return null;

  const stats = [
    { label: "Rank", value: profile.rank || "Unranked", icon: Trophy, color: "text-amber-600 dark:text-yellow-400" },
    { label: "System Owns", value: profile.system_owns !== undefined ? profile.system_owns : 0, icon: Target, color: "text-red-700 dark:text-red-400" },
    { label: "User Owns", value: profile.user_owns !== undefined ? profile.user_owns : 0, icon: Crosshair, color: "text-cyan-700 dark:text-cyan-400" },
    { label: "Respect", value: profile.respects !== undefined ? profile.respects : 0, icon: Award, color: "text-green-700 dark:text-green-400" },
  ];

  return (
    <div className="bg-[#f0f0ea] dark:bg-[#111827] border border-[#a72334]/20 dark:border-green-500/20 p-8 rounded-xl relative overflow-hidden group mb-12 shadow-lg shadow-[#a72334]/5 dark:shadow-green-900/10 transition-colors duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#a72334]/5 dark:bg-green-500/5 rounded-full blur-3xl pointer-events-none transition-colors" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded bg-[#a72334]/10 dark:bg-green-900/40 border border-[#a72334]/30 dark:border-green-500/50 flex items-center justify-center transition-colors">
          <Target className="w-6 h-6 text-[#a72334] dark:text-green-400 transition-colors" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white tracking-wide font-serif dark:font-sans transition-colors">Hack The Box Live Stats</h3>
          <p className="text-sm font-mono text-[#a72334]/80 dark:text-green-400/80 mt-1 transition-colors">Status: Connected to API</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 font-mono">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-[#0B1120] p-4 rounded border border-[#cbc9c0] dark:border-white/5 hover:border-[#a72334]/30 dark:hover:border-green-500/30 transition-colors pointer-events-none">
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className={`w-5 h-5 ${stat.color} transition-colors`} />
              <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-[#1a1a1a] dark:text-white mt-2 transition-colors">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <HTBActivityPulse />
      </div>
    </div>
  );
}
