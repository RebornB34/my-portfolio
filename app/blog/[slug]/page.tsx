import { getPostBySlug, getSortedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    <article className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back to Posts
      </Link>

      <header className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
        <div className="text-blue-400 font-mono flex items-center gap-4">
          <time>{post.date}</time>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">brian@portfolio</span>
        </div>
      </header>

      <div className="prose prose-invert prose-cyan max-w-none prose-pre:bg-[#0a0f18] prose-pre:border prose-pre:border-white/10 prose-p:text-gray-300">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
