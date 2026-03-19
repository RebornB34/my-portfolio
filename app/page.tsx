import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-gray-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
