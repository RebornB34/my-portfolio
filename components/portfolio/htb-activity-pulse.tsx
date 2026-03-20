import { getHTBActivity } from "@/lib/htb";
import { Terminal, Activity } from "lucide-react";

export async function HTBActivityPulse() {
  const activity = await getHTBActivity();

  if (!activity || activity.length === 0) return null;

  // Take the most recent 5 items
  const recentEvents = activity.slice(0, 5);

  return (
    <div className="bg-[#0B1120] border border-blue-500/20 p-6 rounded-xl font-mono text-sm group shadow-lg shadow-blue-900/10">
      <div className="flex items-center gap-3 mb-4 border-b border-blue-500/10 pb-3">
        <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
        <span className="text-cyan-400 font-bold uppercase tracking-widest">HTB Live Success Feed</span>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-amber-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
      </div>

      <div className="space-y-4">
        {recentEvents.map((event: any, idx: number) => (
          <div key={idx} className="flex gap-4 items-start group/item">
            <span className="text-gray-500 shrink-0">[{event.date.split(" ")[0]}]</span>
            <div className="flex-1">
              <span className="text-green-400 font-bold">root@portfolio:~$ </span>
              <span className="text-gray-300">
                {event.type === "machine" ? "Rooted " : "Captured flag on "}
                <span className="text-white font-bold underline decoration-blue-500/50">{event.name}</span>
                {event.machine_difficulty && (
                   <span className="ml-2 px-1.5 py-0.5 rounded bg-blue-500/10 text-[10px] text-blue-400 border border-blue-500/20 uppercase">
                     {event.machine_difficulty}
                   </span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-blue-500/10 flex items-center gap-2 text-[11px] text-gray-500">
        <Activity className="w-3 h-3 text-green-500" />
        <span>Monitoring HTB Pulse... Status: Active</span>
      </div>
    </div>
  );
}
