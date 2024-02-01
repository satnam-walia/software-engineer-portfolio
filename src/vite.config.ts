// vite.config.js
import { defineConfig } from 'vite';


export default defineConfig({
  server: {
    port: 4200, // Optional: Configure the port Vite runs on
  },
  build: {
    sourcemap: false,
  },
});
