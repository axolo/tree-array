import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_PUBLIC_PATH } = env

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [vue()],
    build: {
      outDir: 'build'
    }
  }
})
