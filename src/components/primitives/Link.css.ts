import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

export const link = recipe({
  base: {
    position: "relative",
    padding: "2px 0",
    width: "100%",

    display: "inline-flex",
    alignItems: "center",
    gap: "4px",

    outline: "none",
    cursor: "pointer",

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",

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
        padding: 0,
        background: "transparent",
        border: "none",
      },
    },
    highlighted: {
      true: {
        color: theme.tokens.fg.active,
        selectors: {
          "&:hover": {
            color: theme.color.primary[12],
          },
          "&:focus-visible": {
            color: theme.color.primary[12],
          },
          "&:active": {
            color: theme.color.primary[13],
          },
        },
      },
    },
  },
  defaultVariants: {
    as: "a",
    highlighted: false,
  },
})
