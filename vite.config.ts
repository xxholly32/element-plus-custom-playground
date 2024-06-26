import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'warn',
  resolve: {
    alias: [
      // @element-plus/* 指向 element-plus
      {
        find: /^@element-plus\/(?!icons-vue|utils|components).*$/,
        replacement: 'element-plus',
      },
      // utils 并没有从element-plus导出，所以需要手动指定
      {
        find: '@element-plus/utils',
        replacement: resolve(__dirname, './node_modules/element-plus/es/utils/index.mjs'),
      },
      // utils 并没有从element-plus导出，所以需要手动指定
      {
        find: /^@element-plus\/components/,
        replacement: resolve(__dirname, './node_modules/element-plus/es/components'),
      },
    ]
  },
  plugins: [
    vue(),
    vueJsx(),

    Unocss(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
  ],
})
