import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: process.env.PAGES_BASE || '/',
  server: {
    host: true, // 0.0.0.0
    port: 5173,
    strictPort: true,
    allowedHosts: true, // tunnel Cloudflare / localtunnel
  },
  build: {
    rollupOptions: {
      // voxel.html (M6, motore a chunk voxel) accanto al motore continuo: due pagine, stesso build.
      input: {
        main: resolve(__dirname, 'index.html'),
        voxel: resolve(__dirname, 'voxel.html'),
      },
    },
  },
});
