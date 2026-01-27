import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "webflow-ui": resolve(__dirname, "../ui/src"),
    },
  },
  server: {
    port: 5174,
    open: true,
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    target: "esnext",
  },
});
