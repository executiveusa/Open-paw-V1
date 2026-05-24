import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Field Notes — Open Paw Blog',
  description: 'Practical guides for animal rescue, shelter, and welfare teams.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <PublicLayout>
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Field Notes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Practical guides for animal welfare teams.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                    {post.description}
                  </p>
                  <time className="text-xs text-gray-400 dark:text-gray-500">{post.date}</time>
                </Link>
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
