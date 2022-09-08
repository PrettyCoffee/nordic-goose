import { style } from "@vanilla-extract/css"

import { theme } from "../theme"

export const duck = style({
  position: "fixed",
  width: "100%",
  transform: "scale(1.5)",
  inset: "0",
  margin: "auto",
})

export const icons = style({
  position: "fixed",
  top: theme.space.sm,
  right: theme.space.sm,
})
