/**
 * Postbuild script for GitHub Pages SPA routing.
 * 
 * Copies dist/index.html into each SPA route directory so that
 * GitHub Pages serves the app with a 200 status (instead of 404)
 * when Google or users directly visit a route like /clients.
 */
import { mkdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const indexFile = join(distDir, 'index.html');

// All SPA routes that need static HTML copies
const routes = [
  'services',
  'clients',
  'careers',
  'contact',
  'ceo-message',
  'leadership',
  'credentials',
];

for (const route of routes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexFile, join(routeDir, 'index.html'));
}

console.log(`✓ Created ${routes.length} static route directories for GitHub Pages SPA routing.`);
