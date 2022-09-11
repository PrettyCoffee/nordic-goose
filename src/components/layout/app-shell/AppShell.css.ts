import { style } from "@vanilla-extract/css"

import { theme } from "../../../theme"

export const icons = style({
  position: "fixed",
  top: theme.space.sm,
  right: theme.space.sm,
})
