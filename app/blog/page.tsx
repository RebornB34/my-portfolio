import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-colors duration-300">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-serif text-[#a72334] dark:font-mono dark:text-cyan-400 mb-4 transition-colors">Security Write-ups &amp;&amp; Notes</h1>
        <p className="text-gray-700 dark:text-gray-400 text-lg transition-colors">My personal space for sharing CTF solutions, vulnerability research, and technical thoughts.</p>
      </div>

      <div className="space-y-8">
        {posts.length === 0 ? (
          <div className="p-8 border border-dashed border-[#cbc9c0] dark:border-gray-600 rounded-lg text-center text-gray-600 dark:text-gray-500 transition-colors">
            No posts found. Start writing in content/blog/!
          </div>
        ) : (
          posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
              <div className="p-6 rounded-xl bg-[#f0f0ea] dark:bg-[#111827] border border-[#cbc9c0] dark:border-white/5 hover:border-[#a72334]/30 dark:hover:border-cyan-500/30 transition-all shadow-md hover:shadow-[0_0_20px_rgba(167,35,52,0.15)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <h2 className="text-2xl font-semibold text-[#1a1a1a] dark:text-white group-hover:text-[#a72334] dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {post.title}
                </h2>
                <div className="text-sm font-mono text-[#a72334] dark:text-blue-400 mb-4 transition-colors">{post.date}</div>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">{post.description}</p>
                <div className="mt-4 text-[#a72334] dark:text-cyan-500 font-medium text-sm flex items-center gap-2 transition-colors">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-gray-600 hover:text-[#1a1a1a] dark:text-gray-500 dark:hover:text-white transition-colors border-b border-[#cbc9c0] dark:border-gray-600 pb-1">
          cd .. (Return Home)
        </Link>
      </div>
    </main>
  );
}
