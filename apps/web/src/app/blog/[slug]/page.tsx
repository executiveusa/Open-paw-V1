import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

function renderContent(content: string) {
  const paragraphs = content.split('\n\n');
  return paragraphs.map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**') && !block.slice(2, -2).includes('\n')) {
      return (
        <h3 key={i} className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
          {block.slice(2, -2)}
        </h3>
      );
    }
    if (block.startsWith('---')) {
      return <hr key={i} className="my-8 border-gray-100 dark:border-gray-800" />;
    }
    if (block.startsWith('*') && block.endsWith('*') && !block.slice(1, -1).includes('\n')) {
      return (
        <p key={i} className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
          {block.slice(1, -1)}
        </p>
      );
    }
    const inline = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return (
      <p
        key={i}
        className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: inline }}
      />
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PublicLayout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Field Notes
          </Link>

          <header className="mb-10">
            <div className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-3">
              {post.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 balance">
              {post.title}
            </h1>
            <time className="text-sm text-gray-400 dark:text-gray-500">{post.date}</time>
          </header>

          <div className="prose-like">{renderContent(post.content)}</div>

          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden />
              All Field Notes
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
