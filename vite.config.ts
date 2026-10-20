import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { configPlugin, sassHmrPlugin } from './scripts/vite_plugins.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), configPlugin, sassHmrPlugin],
  css: {
    transformer: 'postcss',
  },
  build: {
    emptyOutDir: true,
    minify: 'oxc',
    cssMinify: true,
    cssCodeSplit: true,
    assetsDir: 'assets',
    rolldownOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/chunks/[name]-[hash].js',
      },
    },
  },
});
