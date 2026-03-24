import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    // Allow Sanity Studio packages to be loaded via Vite
    optimizeDeps: {
      include: ['@sanity/client'],
    },
  },

  integrations: [
    react(),
  ],
});
