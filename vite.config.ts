import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  build: {
    target: 'es2022',
    copyPublicDir: false,
    lib: {
      name: 'is-components',
      entry: path.resolve('src/components/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },

  plugins: [
    vue(),
    svgLoader(),
    dts({
      cleanVueFileName: true,
      entryRoot: './src/components',
      exclude: ['**/*.stories.ts', '**/*.css'],
    }),
  ],

  optimizeDeps: {
    include: ['vue'],
  },
});
