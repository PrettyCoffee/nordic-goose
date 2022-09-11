import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
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
    vanillaExtractPlugin({ identifiers: "debug" }),
    solid(),
    webExt({
      manifest: getManifest,
      assets: "assets",
      additionalInputs: ["startpage/startpage.html"],
      watchFilePaths: [root("src/manifest.js")],
      verbose: false,
      browser: process.env.TARGET || "firefox",
    }),
  ],
})
