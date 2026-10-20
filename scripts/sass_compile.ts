import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const sassArgs = [
  '--style compressed',
  '--source-map',
  '--embed-sources',
  '--no-error-css',
  '--load-path=node_modules/',
];

const getArgs = () => {
  const commandArgs = process.argv.slice(2);

  if (commandArgs && commandArgs.length) {
    return sassArgs.concat(commandArgs).join(' ');
  }
  return sassArgs.join(' ');
};

try {
  execSync(`sass ${getArgs()} scss:src`, { cwd: rootDir, stdio: 'inherit' });
} catch {
  console.error('Failed to compile metadata SCSS');
  process.exit(1);
}
