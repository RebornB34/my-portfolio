import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { RecentBlogs } from "@/components/portfolio/recent-blogs";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <RecentBlogs />
      <Contact />
    </main>
  );
}
