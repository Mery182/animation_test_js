
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true, 
    port: 3000  
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        js: 'js.html',
        anime: 'anime.html',
        gsap: 'gsap.html'
      }
    }
  }
})