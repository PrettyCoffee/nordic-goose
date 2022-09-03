import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

export const layout = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: theme.space.xs,
  },
})

export const input = recipe({
  base: {
    height: theme.space.lg,
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    borderBottom: theme.border.default,
    ":focus-visible": {
      borderBottom: theme.border.primary,
    },
  },
})
