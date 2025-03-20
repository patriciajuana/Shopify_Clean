import { defineConfig } from "vite";
import path from "path";

// Export Vite configuration
export default defineConfig({
  build: {
    outDir: "assets", // Output directory for the build
    emptyOutDir: true, // Empty output directory before the build
    cssCodeSplit: true, // Enable CSS code splitting to extract the CSS into a separate file
    minify: false, // Disable JS and CSS minification
    rollupOptions: {
      input: path.resolve(__dirname, "src/js/main.js"), // Main JS entry point
      output: {
        // Ensure JS is named `application.js`
        entryFileNames: "application.js",
        chunkFileNames: "application.js", // All JS chunks go into `application.js`
        assetFileNames: "application.css", // CSS file will be named `application.css`
        manualChunks: null, // Disable chunking to bundle everything into `application.js`
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {},
  },
});
