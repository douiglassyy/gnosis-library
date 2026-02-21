import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://douiglassyy.github.io/gnosis-library',
  base: '/gnosis-library',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
