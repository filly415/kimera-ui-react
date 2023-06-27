import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process';
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    'process.env': process.env
  },
  server: {
    port:3000
  }
})