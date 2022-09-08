import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

export const link = recipe({
  base: {
    position: "relative",
    padding: "2px 0",

    display: "inline-flex",
    alignItems: "center",
    gap: "4px",

    outline: "none",
    cursor: "pointer",

    color: theme.tokens.fg.base,
    selectors: {
      "&:hover": {
        color: theme.tokens.fg.hover,
        textDecoration: "underline",
      },
      "&:focus-visible": {
        color: theme.tokens.fg.focus,
        textDecoration: "underline",
      },
      "&:active": {
        color: theme.tokens.fg.press,
      },
    },
  },
  variants: {
    as: {
      a: {},
      button: {
        background: "transparent",
        border: "none",
      },
    },
    nowrap: {
      true: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflowX: "hidden",
      },
    },
    highlighted: {
      true: {
        color: theme.tokens.fg.active.base,
        selectors: {
          "&:hover": {
            color: theme.tokens.fg.active.hover,
          },
          "&:focus-visible": {
            color: theme.tokens.fg.active.focus,
          },
          "&:active": {
            color: theme.tokens.fg.active.press,
          },
        },
      },
    },
  },
  defaultVariants: {
    as: "a",
    nowrap: false,
    highlighted: false,
  },
})

export type LinkVariants = RecipeVariants<typeof link> & {}
