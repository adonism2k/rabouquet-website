import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // Performance optimizations
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,

    // Optimize dependencies
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    },

    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },

    // Source maps for debugging (disable in production)
    sourcemap: false
  },

  // Server configuration
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },

  // Optimization
  optimizeDeps: {
    include: ['vue', 'vue-router']
  },

  // CSS configuration
  css: {
    devSourcemap: true
  }
})
