import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
		lib: {
			entry: fileURLToPath(new URL('./src/lib/index.js', import.meta.url)),
			name: 'AxoloTreeArray',
			fileName: 'index'
		}
  }
})
