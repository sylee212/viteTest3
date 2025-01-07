import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  base: "/vitetest3/",
  plugins: [
    react(),
    ghPages(),
  ],
})