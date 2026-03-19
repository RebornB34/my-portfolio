import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-gray-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <div className="pt-8">
        <Projects />
      </div>
    </main>
  );
}
