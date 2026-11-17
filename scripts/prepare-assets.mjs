import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const desktopRoot = resolve(__dirname, '..');
const webDistSrc = resolve(desktopRoot, '../web/dist');
const webDistDest = resolve(desktopRoot, 'web-dist');

if (!existsSync(webDistSrc)) {
  console.error('[prepare-assets] apps/web/dist not found. Run npm run build:web first.');
  process.exit(1);
}

rmSync(webDistDest, { recursive: true, force: true });
mkdirSync(webDistDest, { recursive: true });
cpSync(webDistSrc, webDistDest, { recursive: true });
console.log('[prepare-assets] Copied apps/web/dist -> apps/desktop/web-dist');

mkdirSync(resolve(desktopRoot, 'dist'), { recursive: true });
await build({
  entryPoints: [resolve(desktopRoot, 'src/main.ts')],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
  outfile: resolve(desktopRoot, 'dist/main.cjs'),
  external: ['electron', 'node:sqlite', 'zlib-sync', 'bufferutil', 'utf-8-validate'],
  define: {
    'import.meta.url': 'importMetaUrl',
  },
  banner: {
    js: 'const importMetaUrl = require("node:url").pathToFileURL(__filename).href;',
  },
});
console.log('[prepare-assets] Bundled main.ts -> apps/desktop/dist/main.cjs');
