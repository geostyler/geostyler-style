import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

const externalDeps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist'
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'geostyler-style',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => {
        return externalDeps.some(
          dep => id === dep || id.startsWith(`${dep}/`)
        );
      }
    },
  },
});
