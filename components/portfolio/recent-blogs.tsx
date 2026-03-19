import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";

export function RecentBlogs() {
  const posts = getSortedPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-cyan-400">
            Latest Write-ups
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Recent security research, CTF walkthroughs, and technical blog posts.
          </p>
        </div>
        <Link href="/blog" className="hidden sm:inline-block px-6 py-2 border border-blue-500/50 text-blue-400 rounded hover:bg-blue-500/10 transition-colors font-medium">
          View All Posts
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group block h-full">
            <div className="bg-[#111827] border border-white/5 p-8 rounded-xl h-full flex flex-col hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <time className="text-sm font-mono text-blue-400 mb-3 block">{post.date}</time>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 flex-1 line-clamp-3 mb-6">
                {post.description}
              </p>
              <div className="text-cyan-500 text-sm font-medium flex items-center gap-2 mt-auto">
                Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <Link href="/blog" className="inline-block px-8 py-3 w-full border border-blue-500/50 text-blue-400 rounded hover:bg-blue-500/10 transition-colors font-medium">
          View All Posts
        </Link>
      </div>
    </section>
  );
}
