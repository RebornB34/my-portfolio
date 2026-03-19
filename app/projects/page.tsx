import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <div className="pt-8">
        <Projects />
      </div>
    </main>
  );
}
