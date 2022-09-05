import { style } from "@vanilla-extract/css"

import { theme } from "../../theme"

export const layout = style({
  display: "flex",
  alignItems: "center",
  gap: theme.space.xs,
})

export const input = style({
  height: theme.space.lg,
  flex: 1,
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  borderBottom: theme.border.default,
  ":focus-visible": {
    borderBottom: theme.border.primary,
  },
})
