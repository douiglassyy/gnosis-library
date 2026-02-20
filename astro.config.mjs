import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-site-name.github.io',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
