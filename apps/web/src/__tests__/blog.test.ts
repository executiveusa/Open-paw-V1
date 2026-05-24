import { describe, it, expect } from 'vitest';
import { getAllPosts, getPostBySlug, getRecentPosts } from '@/lib/blog';

describe('blog', () => {
  it('returns all 10 posts', () => {
    expect(getAllPosts()).toHaveLength(10);
  });

  it('each post has required fields', () => {
    for (const post of getAllPosts()) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.description).toBeTruthy();
      expect(post.content.length).toBeGreaterThan(100);
    }
  });

  it('finds post by slug', () => {
    const post = getPostBySlug('why-animal-welfare-software-should-be-local-first');
    expect(post).toBeDefined();
    expect(post?.title).toContain('Local-First');
  });

  it('returns undefined for unknown slug', () => {
    expect(getPostBySlug('does-not-exist')).toBeUndefined();
  });

  it('getRecentPosts returns 3 by default', () => {
    expect(getRecentPosts()).toHaveLength(3);
  });

  it('slug uniqueness', () => {
    const slugs = getAllPosts().map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });
});
