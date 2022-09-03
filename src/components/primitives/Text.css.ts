import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

export const text = recipe({
  base: {
    color: theme.tokens.fg.base,
    fontSize: theme.space.md,
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  variants: {
    as: {
      span: {},
      h1: {
        color: theme.tokens.fg.active,
        fontSize: theme.space.lg,
      },
    },
    nowrap: {
      true: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflowX: "hidden",
      },
    },
  },
  defaultVariants: {
    as: "span",
    nowrap: false,
  },
})
