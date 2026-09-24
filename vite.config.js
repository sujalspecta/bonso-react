import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
   build: {
    // Highlight-start
    cssMinify: 'esbuild', // Switch from lightningcss to esbuild
    // Highlight-end
  },
  css: {
     transformer: 'postcss', 
    minify: 'esbuild' ,
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: [
          'import',
          'color-functions',
          'slash-div',
          'global-builtin',
        ],
      },
    },
  },
});
