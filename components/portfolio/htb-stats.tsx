import { Target, Trophy, Crosshair, Award } from "lucide-react";

async function getHTBStats() {
  const token = process.env.HTB_API_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch("https://labs.hackthebox.com/api/v4/user/profile/basic/2252974", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.profile;
  } catch (error) {
    return null;
  }
}

export async function HTBStats() {
  const profile = await getHTBStats();
  
  if (!profile) return null;

  const stats = [
    { label: "Rank", value: profile.rank_text || "Unranked", icon: Trophy, color: "text-yellow-400" },
    { label: "System Owns", value: profile.system_owns !== undefined ? profile.system_owns : 0, icon: Target, color: "text-red-400" },
    { label: "User Owns", value: profile.user_owns !== undefined ? profile.user_owns : 0, icon: Crosshair, color: "text-cyan-400" },
    { label: "Respect", value: profile.respects !== undefined ? profile.respects : 0, icon: Award, color: "text-green-400" },
  ];

  return (
    <div className="bg-[#111827] border border-green-500/20 p-8 rounded-xl relative overflow-hidden group mb-12 shadow-lg shadow-green-900/10">
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded bg-green-900/40 border border-green-500/50 flex items-center justify-center">
          <Target className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-wide font-sans">Hack The Box Live Stats</h3>
          <p className="text-sm font-mono text-green-400/80 mt-1">Status: Connected to API</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 font-mono">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#0B1120] p-4 rounded border border-white/5 hover:border-green-500/30 transition-colors pointer-events-none">
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
