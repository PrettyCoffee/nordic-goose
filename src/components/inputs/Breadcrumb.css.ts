import { style } from "@vanilla-extract/css"

import { theme } from "../../theme"

export const breadcrumb = style({
  display: "flex",
})

export const separator = style({
  color: theme.tokens.fg.muted,
  marginLeft: theme.space.sm,
  marginRight: theme.space.sm,
  userSelect: "none",
})
