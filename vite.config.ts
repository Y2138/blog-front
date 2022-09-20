import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      dts: './auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, ".") },
      { find: "@", replacement: resolve(__dirname, './src') }
    ],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/common.scss";'
      }
    }
  },
  server: {
    host: true,
    port: 8117,
    https: false,
  }
})
