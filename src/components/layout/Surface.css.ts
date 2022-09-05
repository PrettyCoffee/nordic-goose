import { style } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"

import { theme } from "../../theme"

export const surface = style({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: theme.space.xl,
  right: theme.space.xl,
  margin: "auto",
  height: "max-content",
  maxWidth: "800px",

  display: "flex",

  color: theme.tokens.fg.base,
  backgroundColor: theme.tokens.bg.primary,
  borderRadius: theme.space.lg,
  overflow: "hidden",
  boxShadow: "16px 16px 0px rgb(52, 71, 95)",

  padding: theme.space.sm,
})

export const surfaceContent = style({
  vars: {
    "--shadow-color": "214deg 31% 30%",
    "--surface-content-shadow": `
      1px 0px 1.1px hsl(var(--shadow-color) / 0.5),
      3.3px 0px 3.7px -0.8px hsl(var(--shadow-color) / 0.5),
      8.2px 0px 9.2px -1.7px hsl(var(--shadow-color) / 0.5),
      20px 0.1px 22.5px -2.5px hsl(var(--shadow-color) / 0.5)
    `,
  },
  flex: 1,
  padding: calc.multiply(theme.space.md, 1.5),
  backgroundColor: theme.tokens.bg.surface,
  borderRadius: calc.subtract(theme.space.lg, theme.space.sm),

  display: "flex",
  flexDirection: "column",
  gap: theme.space.sm,

  boxShadow: "var(--surface-content-shadow)",
  overflow: "hidden",
})

export const surfaceImage = style({
  objectFit: "cover",
})
