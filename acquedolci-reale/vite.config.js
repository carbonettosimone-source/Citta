import { defineConfig } from 'vite';

// base relativo: la build funziona servita da qualunque cartella (anche come Artifact multi-file)
export default defineConfig({
  base: process.env.PAGES_BASE || './',
  server: { host: '127.0.0.1', port: 5190 },
  build: { target: 'es2022', chunkSizeWarningLimit: 2000 },
});
