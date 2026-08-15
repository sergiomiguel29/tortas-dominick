import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const output = resolve(import.meta.dirname, "dist-pages");
const routes = ["tortas", "postres", "disenos", "arma-tu-torta", "nosotros", "contacto"];

export default defineConfig({
  root: resolve(import.meta.dirname, "pages"),
  publicDir: resolve(import.meta.dirname, "public"),
  base: "/tortas-dominick/",
  plugins: [
    react(),
    {
      name: "github-pages-fallback",
      closeBundle() {
        const index = resolve(output, "index.html");
        copyFileSync(index, resolve(output, "404.html"));
        for (const route of routes) {
          const directory = resolve(output, route);
          mkdirSync(directory, { recursive: true });
          copyFileSync(index, resolve(directory, "index.html"));
        }
        writeFileSync(resolve(output, ".nojekyll"), "");
      },
    },
  ],
  build: {
    outDir: output,
    emptyOutDir: true,
  },
});
