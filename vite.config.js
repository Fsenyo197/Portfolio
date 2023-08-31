import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteReactPlugin from 'vite-plugin-react/dist/index.js'; // Use the default import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
