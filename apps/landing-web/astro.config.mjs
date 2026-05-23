import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://openpaw.org',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-light' },
  },
});
