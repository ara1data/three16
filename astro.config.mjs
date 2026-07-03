// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://three16.xyz',
  vite: {
    plugins: [tailwindcss()],
  },
});