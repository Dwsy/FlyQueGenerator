import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import monkey, { cdn } from 'vite-plugin-monkey';
import AutoImport from 'unplugin-auto-import/vite';

import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // minify: "esbuild"
    minify: false
  },
  plugins: [
    jsx({}),
    AutoImport({
      imports: ["vue", "pinia", "@vueuse/core"],//这里是自动引入api的项目
      dts: "./src/auto-imports.d.ts",//在这创建.d.ts文件
    }),
    vue(),
    monkey({
      server: { open: false },
      entry: 'src/main.ts',
      userscript: {
        icon: 'http://flydoc.dwsy.link/xwlogoblue.png',
        namespace: 'dwsy/flycodegenerator',
        match: ['http://xwide.dwsy.link/*'],
        "run-at": 'document-start',
        updateURL: "https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js",
        downloadURL: "https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js",
        version: "1.2.0",
        author: "Dwsy"
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },

    }),
    Components({
      dts: "./src/components.d.ts",//创建ts文件
      extensions: ['vue'],//指定文件的后缀
      dirs: ["src/components"],//指定路径，自动导入自定义组件
    }),
  ],
});
