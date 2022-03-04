import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImporter from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BoardGameHelper/',
  resolve: {
    alias: {
      '~@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImporter({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver()],
    }),
    Icons({
      compiler: 'vue3',
    }),
  ],
  test: {
    globals: true,
  },
});
