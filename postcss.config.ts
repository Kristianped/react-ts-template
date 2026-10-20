import purgeCssPlugin from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';
import { type Config } from 'postcss-load-config';
import postCssNestedPlugin from 'postcss-nested';

const postCssConfig: Config = {
  plugins: [
    postCssNestedPlugin({}),
    autoprefixer(),
    purgeCssPlugin({
      // Files to scan for the class names actually in use
      content: ['./**/*.html', './**/*.ts', './**/*.tsx'],
      // Bootstrap 6 uses ":" in class names (e.g. `md:d-none`, `hover:opacity-50`),
      // so the extractor must keep colons and slashes.
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        // Classes added at runtime by Bootstrap's JS that never appear in your HTML
        standard: ['show', 'active', 'hiding', 'dialog-open'],
        // Keep component families that are generated or toggled dynamically
        greedy: [/^carousel/, /^menu/, /^drawer/, /^dialog/, /^tooltip/, /^popover/],
      },
    }),
  ],
};

export default postCssConfig;
