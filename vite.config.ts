import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const imageChecker = (name: string): boolean => {
  const extType = name.split('.').at(1) ?? '';
  return /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType);
};
const fontChecker = (name: string): boolean => {
  const extType = name.split('.').at(1) ?? '';
  return /woff|woff2/.test(extType);
};
const cssChecker = (name: string): boolean => {
  return name.endsWith('.css');
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'color-functions',
          'mixed-decls',
          'global-builtin',
          'if-function',
        ],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '~bootstrap': path.resolve(import.meta.dirname, 'node_modules/bootstrap'),
      '~bootstrap-icons': path.resolve(import.meta.dirname, 'node_modules/bootstrap-icons'),
    },
  },
  root: path.resolve(import.meta.dirname, 'src'),
  publicDir: path.resolve(import.meta.dirname, 'public'),
  base: './',
  build: {
    emptyOutDir: true,
    outDir: path.resolve(import.meta.dirname, 'dist'),
    assetsDir: 'assets',
    cssCodeSplit: true,
    rolldownOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/chunks/[name]-[hash].js',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.names) {
            if (chunkInfo.names.some(imageChecker)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (chunkInfo.names.some(fontChecker)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            if (chunkInfo.names.some(cssChecker)) {
              return 'css/[name]-[hash].css';
            }
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
