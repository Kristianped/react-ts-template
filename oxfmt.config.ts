import { defineConfig } from 'oxfmt';

export default defineConfig({
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  insertFinalNewline: true,
  trailingComma: 'es5',
  sortImports: true,
  sortPackageJson: true,
  ignorePatterns: [
    '.git',
    'node_modules',
    '.gitignore',
    'LICENSE',
    'build',
    'dist',
    'dist-ssr',
    '.all-contributorsrc',
    '.vscode',
    '.idea',
  ],
});
