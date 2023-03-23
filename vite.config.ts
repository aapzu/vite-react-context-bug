import react from '@vitejs/plugin-react';
import hq from 'alias-hq';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
  server: {
    port: 4000,
  },
  resolve: {
    alias: hq.get('rollup'),
  },
});
