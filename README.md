# element-plus-custom-playground

## 说明

我个人会在项目中定制 element-plus 的一些代码，不过这些代码不一定适用于所有人，所以我会将这些代码放在这个项目中，以便于我在不同项目中复用。为了更好的能够改动和复用代码，我将 element-plus 的代码拷贝到了本项目中，这样我就可以随意的修改 element-plus 的代码了。

由于本地不用 element-plus 的代码，跑起来会有一定的难度，所以我对一些 alias 进行了修改，以便于本地能够跑起来。

已经迁移的包括：

+ el-button
+ el-input
+ el-checkbox
+ el-select
+ el-date-picker

## 改动的配置

有引入的是一些源码，对应的依赖要单独下载，可以参考 [element-plus package.json](https://github.com/element-plus/element-plus/blob/dev/packages/element-plus/package.json#L82)

```json
"dependencies": {
  "@popperjs/core": "npm:@sxzz/popperjs-es@^2.11.7",
  "@vueuse/core": "^10.1.2",
  "element-plus": "2.7.3",
  "lodash-unified": "^1.0.2",
  "@ctrl/tinycolor": "4.1.0",
  "dayjs": "^1.11.11",
  "@vue/shared": "^3.4.1",
},
```

还有就是 vite.config.ts 的配置，主要配置一些 @element-plus/* 的 alias；其中 @element-plus/utils 是没有从 element-plus 中导出，其他的话指向 element-plus 即可。

```ts
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [
      // @element-plus/* 除了 icons-vue|utils|components 指向 element-plus
      {
        find: /^@element-plus\/(?!icons-vue|utils|components).*$/,
        replacement: 'element-plus',
      },
      // utils 并没有从 element-plus 导出，所以需要手动指定
      {
        find: '@element-plus/utils',
        replacement: resolve(__dirname, './node_modules/element-plus/es/utils/index.mjs'),
      },
      // components/* 的需要单独指定
      {
        find: /^@element-plus\/components/,
        replacement: resolve(__dirname, './node_modules/element-plus/es/components'),
      },
    ]
  },
  plugins: [
    vue(),
    vueJsx()
  ],
})

```
