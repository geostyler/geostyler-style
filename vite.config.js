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
      outDir: 'dist',
      entryRoot: 'src',
      compilerOptions: {
        declarationDir: 'dist'
      },
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
      external: (id) => {
        return externalDeps.some(
          dep => id === dep || id.startsWith(`${dep}/`)
        );
      }
    },
  },
});
