import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'login': './src/pages/login.html'
        // Agrega más páginas según sea necesario
      },
    },
  },
});