import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Plugin, UserConfig } from 'vite';

import assetFileNames from './assetFileNames.ts';
import codeSplitting from './codeSplitting.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

export const baseConfig: UserConfig = {
  root: path.resolve(rootDir, 'src'),
  publicDir: path.resolve(rootDir, 'public'),
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
  build: {
    outDir: path.resolve(rootDir, 'dist'),
    rolldownOptions: {
      output: {
        codeSplitting,
        assetFileNames,
      },
    },
  },
};

export const configPlugin: Plugin = {
  name: 'config-plugin',
  config() {
    return baseConfig;
  },
};

export const sassHmrPlugin: Plugin = {
  name: 'sass-reload',
  configureServer(server) {
    const { ws, watcher } = server;
    watcher.on('change', (file) => {
      if (file.endsWith('main.css')) {
        ws.send({ type: 'full-reload' });
      }
    });
  },
};
