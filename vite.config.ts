import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // Import the plugin
import { visualizer } from 'rollup-plugin-visualizer'; // Import the visualizer

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    ViteImageOptimizer({ // Add the plugin configuration
      /* pass your config */
      // See https://github.com/FatehAK/vite-plugin-image-optimizer for options
      // Default options are usually good to start with
      png: { quality: 85 },
      jpeg: { quality: 85 },
      jpg: { quality: 85 },
      webp: { quality: 85 },
      avif: { quality: 70 },
    }),
    visualizer({ // Add the visualizer plugin
      open: true, // Automatically open the report in the browser after build
      gzipSize: true, // Show gzip size
      brotliSize: true, // Show brotli size
      filename: 'dist/stats.html', // Output report file
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
