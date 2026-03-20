import { Navbar } from "@/components/portfolio/navbar";
import { HTBMachineIndex } from "@/components/portfolio/htb-machine-index";
import { getHTBMachines } from "@/lib/htb";
import { Cpu } from "lucide-react";

export const metadata = {
  title: "Solved Machines | Brian Bundi Portfolio",
  description: "A live automated index of machines rooted on HackTheBox.",
};

export default async function MachinesPage() {
  const machines = await getHTBMachines();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
             <div className="p-3 rounded-lg bg-[#a72334]/10 dark:bg-cyan-500/10 border border-[#a72334]/20 dark:border-cyan-500/20">
                <Cpu className="w-8 h-8 text-[#a72334] dark:text-cyan-400" />
             </div>
             <div>
                <h1 className="text-4xl font-bold font-serif text-[#1a1a1a] dark:text-white dark:font-mono transition-colors">
                  Solved Machines
                </h1>
                <p className="text-gray-700 dark:text-gray-400 text-lg transition-colors font-mono">
                  Real-time synchronization with HackTheBox Profile #2252974
                </p>
             </div>
          </div>
        </div>

        <HTBMachineIndex machines={machines} />

        <div className="mt-12 pt-8 border-t border-[#cbc9c0] dark:border-white/10 text-center">
            <p className="text-sm text-gray-500 font-mono italic">
              "Every machine has a story. Every root has a lesson."
            </p>
        </div>
      </main>
    </>
  );
}
