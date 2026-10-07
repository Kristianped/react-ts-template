import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'react', 'oxc'],
  ignorePatterns: ['dist'],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  env: {
    browser: true,
  },
});
