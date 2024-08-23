import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssnano from 'cssnano';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        cssnano(), // CSS minifikace pomocí cssnano
      ],
    },
  },
  build: {
    minify: 'terser', // Použijeme Terser místo esbuild pro lepší minimalizaci
    terserOptions: {
      compress: {
        drop_console: true, // Odstraní console.log atd.
        drop_debugger: true, // Odstraní debugger statements
      },
      mangle: true, // Zkrácení názvů proměnných
      format: {
        comments: false, // Odstraní komentáře
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Všechny node_modules budou v jednom chunku
          }
        },
      },
    },
    sourcemap: false, // Vypne generování sourcemaps pro produkci
  },
});