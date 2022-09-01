import path from "path";
import { defineConfig } from "vite";
import browserExtension from "vite-plugin-web-extension";
import { getManifest } from "./src/manifest"

const root = (...paths: string[]) =>
  path.resolve(__dirname, ...paths);


export default defineConfig({
  root: "src",
  base: "./",
  build: {
    outDir: root("dist"),
    emptyOutDir: true,
  },
  plugins: [
    browserExtension({
      manifest: getManifest,
      assets: "assets",
      additionalInputs: [
        "index.html",
        "styles.css",
        "variables.css",
        "scripts.ts",
      ],
      watchFilePaths: [root("src/manifest.js")],
      verbose: false,
      browser: process.env.TARGET || "firefox",
    }),
  ],
});
