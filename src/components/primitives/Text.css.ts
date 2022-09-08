import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

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
        color: theme.tokens.fg.active.base,
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
    inherit: {
      true: {
        color: "inherit",
      },
      false: {
        color: theme.tokens.fg.base,
      },
    },
  },
  defaultVariants: {
    as: "span",
  },
})

export type TextVariants = RecipeVariants<typeof text>
