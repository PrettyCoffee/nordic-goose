import { globalStyle, globalFontFace } from "@vanilla-extract/css"

import { theme } from "./theme.css"

const quicksand = "Quicksand"

globalFontFace(quicksand, {
  fontStyle: "regular",
  fontWeight: "400",
  fontDisplay: "swap",
  src: "url(assets/fonts/Quicksand-Regular.ttf) format('truetype')",
})

globalFontFace(quicksand, {
  fontStyle: "medium",
  fontWeight: "500",
  fontDisplay: "swap",
  src: "url(assets/fonts/Quicksand-Medium.ttf) format('truetype')",
})

globalFontFace(quicksand, {
  fontStyle: "bold",
  fontWeight: "700",
  fontDisplay: "swap",
  src: "url(assets/fonts/Quicksand-Bold.ttf) format('truetype')",
})

globalStyle("html, body", {
  height: "100%",
  width: "100%",
  margin: "0",
})

globalStyle("body", {
  minHeight: "100%",
  minWidth: "600px",
  overflow: "hidden",

  font: `500 1rem ${theme.font}`,
  backgroundColor: theme.tokens.bg.base,
})

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
})

globalStyle("input, button, textarea, select", {
  font: "inherit",
  color: "currentColor",
})

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  outline: "none",
})
