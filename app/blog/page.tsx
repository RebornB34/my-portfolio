import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-mono text-cyan-400 mb-4">Security Write-ups &amp;&amp; Notes</h1>
        <p className="text-gray-400 text-lg">My personal space for sharing CTF solutions, vulnerability research, and technical thoughts.</p>
      </div>

      <div className="space-y-8">
        {posts.length === 0 ? (
          <div className="p-8 border border-dashed border-gray-600 rounded-lg text-center text-gray-500">
            No posts found. Start writing in content/blog/!
          </div>
        ) : (
          posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
              <div className="p-6 rounded-xl bg-[#111827] border border-white/5 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {post.title}
                </h2>
                <div className="text-sm font-mono text-blue-400 mb-4">{post.date}</div>
                <p className="text-gray-400">{post.description}</p>
                <div className="mt-4 text-cyan-500 font-medium text-sm flex items-center gap-2">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-gray-500 hover:text-white transition-colors border-b border-gray-600 pb-1">
          cd .. (Return Home)
        </Link>
      </div>
    </main>
  );
}
