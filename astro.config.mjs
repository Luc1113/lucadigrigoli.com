import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lucadigrigoli.com',
  trailingSlash: 'never',
  build: {
    // Emit page.html instead of page/index.html, matching the existing
    // file layout (and vercel.json's cleanUrls) so every current URL
    // (/, /blog, /blog/entry-01, /521, ...) keeps resolving unchanged.
    format: 'file',
  },
});
