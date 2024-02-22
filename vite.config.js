import postcss from "./postcss.config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), glsl()],
  css: {
    postcss,
  },
  build: {
    outDir: "build",
  },
});
