import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../dist/web",
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // The workspace root node_modules holds the hoisted packages (fonts): without it the preview falls back to a system font.
    fs: { allow: ["..", "../../../../node_modules"] },
  },
});
