import { style } from "@vanilla-extract/css"

import { theme } from "../../../theme"

export const icons = style({
  position: "fixed",
  bottom: theme.space.sm,
  right: theme.space.sm,
})
