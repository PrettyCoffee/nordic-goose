import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

export const breadcrumb = recipe({
  base: {
    display: "flex",
  },
})

export const separator = recipe({
  base: {
    color: theme.tokens.fg.muted,
    marginLeft: theme.space.sm,
    marginRight: theme.space.sm,
    userSelect: "none",
  },
})
