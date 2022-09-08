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
  boxShadow: `16px 16px 0px hsl(${theme.tokens.shadowHsl})`,

  padding: theme.space.sm,
})

export const surfaceContent = style({
  vars: {
    "--surface-content-shadow": `
      0px 0px 0.2px hsl(${theme.tokens.shadowHsl} / 0.34),
      0.9px 0px 1px -0.4px hsl(${theme.tokens.shadowHsl} / 0.34),
      1.7px 0px 1.9px -0.7px hsl(${theme.tokens.shadowHsl} / 0.34),
      2.7px 0px 3px -1.1px hsl(${theme.tokens.shadowHsl} / 0.34),
      4.4px 0px 5px -1.4px hsl(${theme.tokens.shadowHsl} / 0.34),
      6.8px 0px 7.7px -1.8px hsl(${theme.tokens.shadowHsl} / 0.34),
      10.4px 0px 11.7px -2.1px hsl(${theme.tokens.shadowHsl} / 0.34),
      15.3px 0px 17.2px -2.5px hsl(${theme.tokens.shadowHsl} / 0.34);
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
