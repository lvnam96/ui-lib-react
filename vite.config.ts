import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { basename, resolve } from 'path';
import { createHash as cryptoCreateHash } from 'crypto';
// import smartAsset from 'rollup-plugin-smart-asset';

export default defineConfig({
  css: {
    modules: {
      // Increase hash length to avoid conflicts (ref: https://stackoverflow.com/a/79035129)
      generateScopedName: (className, filename) => {
        const fileName = basename(filename, '.module.css');

        function createHash(hash: string) {
          return cryptoCreateHash('sha256').update(hash).digest('hex').substring(0, 5);
        }

        const hash = createHash(className);

        return `${fileName}_${className}__${hash}`;
      }
    }
  },
  plugins: [
    // smartAsset({
    //   rule: 'rebase',
    //   keepImport: true, // Delegate bundling to consumer
    //   extensions: ['.svg', '.gif', '.png', '.jpg', '.jpeg', '.webp'],
    // }),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5170,
    open: true,
  },
  build: {
    outDir: 'dist',
    cssCodeSplit: true, // Ensures separate CSS files
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'), // Your library's entry point
      name: 'ReactComponentLibrary',
      formats: ['es', 'cjs'], // Output formats
      fileName: (format, entryName) => entryName + (format === 'es' ? '.js' : `.${format}.js`), // File names for the output files
    },
    rollupOptions: {
      makeAbsoluteExternalsRelative: true, // Make external dependencies relative
      external: ['react', 'react-dom', 'react/jsx-runtime'], // Exclude React from the bundle
      input: {
        lib: resolve(__dirname, 'src/lib/index.ts'), // Main entry point of lib
        FancyBox: resolve(__dirname, 'src/lib/components/FancyBox/index.tsx'),
        BlinkBlink: resolve(__dirname, 'src/lib/components/BlinkBlink/index.tsx'),
        Pikachu: resolve(__dirname, 'src/lib/components/Pikachu/index.tsx'),
        ErrorBoundary: resolve(__dirname, 'src/lib/components/ErrorBoundary/index.tsx'),
        TodoInput: resolve(__dirname, 'src/lib/components/TodoInput/index.tsx'),
      },
      output: {
        inlineDynamicImports: false, // to have multiple entry points, vite needs this option set to false
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
        // Keep CSS files extracted per entry
        assetFileNames: ({ names }) => {
          const name = names[0];
          if (name && name.endsWith('.css')) {
            return '[name][extname]'; // keep CSS files named as per their entry point to be able to import them directly in other app
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
