import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

export const iconbutton = recipe({
  base: {
    vars: {
      "--button-size": theme.space.lg,
    },
    position: "relative",

    height: "var(--button-size)",
    width: "var(--button-size)",
    minHeight: "var(--button-size)",
    minWidth: "var(--button-size)",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",
    overflow: "hidden",
    isolation: "isolate",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",

    selectors: {
      "&:focus-visible": {
        outline: theme.border.primary,
      },

      "&::before": {
        content: "",
        position: "absolute",
        zIndex: -1,
        borderRadius: "50%",
        opacity: 0,
        inset: "20%",
        transition: "0.2s solid",
        transitionProperty: "inset, opacity",
      },
      "&:hover::before, &:focus-visible::before": {
        inset: 0,
        opacity: 0.3,
        backgroundColor: theme.tokens.bg.hover,
      },
      "&:active::before": {
        backgroundColor: theme.tokens.bg.primary,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})
