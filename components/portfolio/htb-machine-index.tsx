"use client";

import { useState } from "react";
import { Search, Filter, Monitor, Cpu } from "lucide-react";

interface Machine {
  id: number;
  name: string;
  os: string;
  difficulty: string;
  avatar: string;
  root_info: string;
  user_info: string;
}

export function HTBMachineIndex({ machines }: { machines: Machine[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");

  const filteredMachines = machines.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === "All" || m.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#f0f0ea] dark:bg-[#111827] p-4 rounded-lg border border-[#cbc9c0] dark:border-white/5 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search machine name..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#a72334] dark:focus:ring-cyan-500 transition-all font-mono"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          {["All", "Easy", "Medium", "Hard", "Insane"].map(diff => (
            <button
              key={diff}
              onClick={() => setFilterDifficulty(diff)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                filterDifficulty === diff 
                ? "bg-[#a72334] text-white border-[#a72334] dark:bg-cyan-500 dark:text-black dark:border-cyan-500 shadow-md" 
                : "bg-white dark:bg-[#0B1120] text-gray-600 dark:text-gray-400 border-[#cbc9c0] dark:border-white/10 hover:border-[#a72334] dark:hover:border-blue-500"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMachines.map((machine) => (
          <div key={machine.id} className="group relative bg-white dark:bg-[#0B1120] border border-[#cbc9c0] dark:border-white/5 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 blur-xl rounded-full transition-colors ${machine.os === 'Linux' ? 'bg-orange-500' : 'bg-blue-500'}`} />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-2 relative overflow-hidden">
                <img src={`https://htb-mp-prod-public-storage.s3.eu-central-1.amazonaws.com${machine.avatar}`} alt={machine.name} className="w-full h-full object-contain relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white group-hover:text-[#a72334] dark:group-hover:text-cyan-400 transition-colors font-mono">
                  {machine.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  {machine.os === 'Linux' ? (
                    <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-1.5 rounded border border-orange-500/20">
                       <Cpu className="w-2.5 h-2.5" /> Linux
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 rounded border border-blue-500/20">
                       <Monitor className="w-2.5 h-2.5" /> Windows
                    </span>
                  )}
                  <span className={`text-[10px] uppercase font-bold px-1.5 rounded border ${
                    machine.difficulty === 'Easy' ? 'text-green-600 border-green-500/20 bg-green-500/10' :
                    machine.difficulty === 'Medium' ? 'text-orange-600 border-orange-500/20 bg-orange-500/10' :
                    'text-red-600 border-red-500/20 bg-red-500/10'
                  }`}>
                    {machine.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-gray-500 dark:text-gray-500">
                <span>Exploit Status:</span>
                <span className="text-green-600 dark:text-green-400 font-bold uppercase tracking-widest text-[10px]">Verified Root</span>
              </div>
              <div className="flex justify-between items-center text-gray-500 dark:text-gray-500">
                <span>Access Level:</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Administrative (Root)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#cbc9c0] dark:border-white/5">
               <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                 <div className="w-full h-full bg-[#a72334] dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500" />
               </div>
               <div className="flex justify-between mt-2 text-[9px] uppercase tracking-widest text-gray-400">
                 <span>Capture the Flag</span>
                 <span>100% Compromised</span>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredMachines.length === 0 && (
        <div className="text-center py-20 bg-[#f0f0ea]/50 dark:bg-[#111827]/50 rounded-xl border border-dashed border-[#cbc9c0] dark:border-white/10">
          <p className="text-gray-500 font-mono">No machines found matching your exploit criteria.</p>
        </div>
      )}
    </div>
  );
}
