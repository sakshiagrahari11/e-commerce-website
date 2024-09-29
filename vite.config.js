import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper': 'swiper/swiper.esm.js', // Use ESM version for better compatibility
    },
  },
 
});
