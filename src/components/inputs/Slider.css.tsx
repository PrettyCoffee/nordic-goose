import { style } from "@vanilla-extract/css"

import { theme } from "../../theme"

export const wrapper = style({
  appearance: "none",
  display: "inline-block",
  background: "transparent",
  width: "10rem",
})

export const valueText = style({
  textAlign: "center",
  fontSize: "0.75rem",
  width: "100%",
  margin: "0 auto",
})

export const input = style({
  appearance: "none",
  outline: "none",
  display: "inline-block",
  backgroundColor: "transparent",
  width: "100%",
  cursor: "pointer",
  height: "1.5rem",
  color: theme.tokens.fg.base,

  selectors: {
    "&::-moz-range-track": {
      backgroundColor: "currentColor",
      height: theme.space.xxs,
      borderRadius: theme.space.xxs,
    },
    "&::-moz-range-thumb": {
      appearance: "none",
      height: theme.space.md,
      width: theme.space.md,
      backgroundColor: theme.tokens.bg.surface,
      outline: theme.border.default,
      outlineColor: "currentColor",
      marginTop: "-0.4rem",
      borderRadius: "50%",
      border: "none",
    },
    "&:focus-visible, &:active": {
      color: theme.tokens.fg.active.base,
    },
  },
})
