import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
		lib: {
			entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
			name: 'AxoloTreeArray',
			fileName: 'index'
		}
  }
})
