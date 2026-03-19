import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";

export function RecentBlogs() {
  const posts = getSortedPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#cbc9c0] dark:border-white/5 transition-colors duration-300">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#a72334] dark:font-mono dark:text-cyan-400 transition-colors">
            Latest Write-ups
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl transition-colors">
            Recent security research, CTF walkthroughs, and technical blog posts.
          </p>
        </div>
        <Link href="/blog" className="hidden sm:inline-block px-6 py-2 border border-[#a72334]/50 dark:border-blue-500/50 text-[#a72334] dark:text-blue-400 rounded hover:bg-[#a72334]/10 dark:hover:bg-blue-500/10 transition-colors font-medium">
          View All Posts
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group block h-full">
            <div className="bg-[#f0f0ea] dark:bg-[#111827] border border-[#cbc9c0] dark:border-white/5 p-8 rounded-xl h-full flex flex-col hover:border-[#a72334]/50 dark:hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(167,35,52,0.1)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <time className="text-sm font-mono text-[#a72334] dark:text-blue-400 mb-3 block transition-colors">{post.date}</time>
              <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-3 group-hover:text-[#a72334] dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-1 line-clamp-3 mb-6 transition-colors">
                {post.description}
              </p>
              <div className="text-[#a72334] dark:text-cyan-500 text-sm font-medium flex items-center gap-2 mt-auto transition-colors">
                Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <Link href="/blog" className="inline-block px-8 py-3 w-full border border-[#a72334]/50 dark:border-blue-500/50 text-[#a72334] dark:text-blue-400 rounded hover:bg-[#a72334]/10 dark:hover:bg-blue-500/10 transition-colors font-medium">
          View All Posts
        </Link>
      </div>
    </section>
  );
}
