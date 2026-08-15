import { copyFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const output = resolve(import.meta.dirname, "dist-pages");

export default defineConfig({
  root: resolve(import.meta.dirname, "pages"),
  publicDir: resolve(import.meta.dirname, "public"),
  base: "/tortas-dominick/",
  plugins: [
    react(),
    {
      name: "github-pages-fallback",
      closeBundle() {
        copyFileSync(resolve(output, "index.html"), resolve(output, "404.html"));
        writeFileSync(resolve(output, ".nojekyll"), "");
      },
    },
  ],
  build: {
    outDir: output,
    emptyOutDir: true,
  },
});
