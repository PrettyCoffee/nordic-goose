import { style } from "@vanilla-extract/css"

import { theme } from "../../theme"

export const iconbutton = style({
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

  color: theme.tokens.fg.base,
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
      backgroundColor: theme.tokens.bg.hover,
    },
    "&:hover::before, &:focus-visible::before": {
      inset: 0,
      opacity: 0.3,
    },
    "&:active::before": {
      backgroundColor: theme.tokens.bg.primary,
    },
  },
})
