import { getPostBySlug, getSortedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";

export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <article className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto transition-colors duration-300">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#a72334] dark:text-gray-400 dark:hover:text-cyan-400 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back to Posts
      </Link>

      <header className="mb-12 border-b border-[#cbc9c0] dark:border-white/10 pb-8 transition-colors">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#a72334] dark:font-sans dark:text-white mb-4 leading-tight transition-colors">{post.title}</h1>
        <div className="text-[#a72334] dark:text-blue-400 font-mono flex items-center gap-4 transition-colors">
          <time>{post.date}</time>
          <span className="text-[#cbc9c0] dark:text-gray-600">|</span>
          <span className="text-gray-700 dark:text-gray-400">brian@portfolio</span>
        </div>
      </header>

      <div className="prose prose-stone dark:prose-invert dark:prose-cyan max-w-none prose-pre:bg-[#0B1120] dark:prose-pre:bg-[#0a0f18] prose-pre:text-white prose-pre:border prose-pre:border-white/10 prose-p:text-[#1a1a1a] dark:prose-p:text-gray-300 transition-colors">
        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
      </article>
    </>
  );
}
