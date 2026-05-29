import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    copyPublicDir: false,
    minify: 'terser',
    lib: {
      entry: 'src/lib/index.js',
      name: 'TreeArray',
      formats: ['es', 'umd'],
      fileName: (format) => `tree-array.${format}.js`
    }
  }
})
