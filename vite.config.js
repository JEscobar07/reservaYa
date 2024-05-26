import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Agrega más páginas según sea necesario
        'login': './src/pages/login.html',
        'dashboard': './src/pages/dashboard.html'
      },
    },
  },
});