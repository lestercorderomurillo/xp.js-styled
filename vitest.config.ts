import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable JavaScript/TypeScript compilation
    include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    
    // Environment configuration
    environment: 'node',
    
    // Transform configuration for TypeScript and React Native
    transform: {
      '^.+\\.(t|j)sx?$': [
        '@swc/jest',
        {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
              decorators: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      ],
    },

    // Setup global test environment
    globals: true,
    
    // Configure coverage reporting
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/',
      ],
    },
  },
  
  // Resolve configuration for proper module importing
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': './src',
    },
  },
});