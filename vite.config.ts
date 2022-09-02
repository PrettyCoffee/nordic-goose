import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import webExt from "vite-plugin-web-extension"

import { getManifest } from "./src/manifest"
import path from "path"

const root = (...paths: string[]) => path.resolve(__dirname, ...paths)

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    outDir: root("dist"),
    emptyOutDir: true,
    target: "esnext",
  },
  plugins: [
    solid(),
    webExt({
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
})
