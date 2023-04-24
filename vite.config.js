import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: './src/index.html',
        about: './src/about.html',
      },
    },
  },
  server: {
    port: 5000,
  },
});
