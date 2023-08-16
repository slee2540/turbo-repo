import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import analyze from 'rollup-plugin-analyzer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      // {
      //   find: '@components',
      //   replacement: path.resolve(__dirname, 'src/components'),
      // },
      // {
      //   find: '@components',
      //   replacement: path.resolve(__dirname, 'src/components/*'),
      // },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/layouts'),
      },
      // {
      //   find: '@layouts',
      //   replacement: path.resolve(__dirname, 'src/layouts/*'),
      // },
    ],
  },
})
