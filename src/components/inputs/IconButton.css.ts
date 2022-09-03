import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"

/*
.icon-button {
  width: calc(var(--space-medium) * 2);
  height: calc(var(--space-medium) * 2);
  color: var(--color-primary-fg);

  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-button:hover {
  color: var(--color-primary-base);
}

.icon-button:focus-visible {
  color: var(--color-primary-base);
  background: var(--color-bg-highlight);
  outline: var(--space-smallest) solid var(--color-text);
}
*/

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
        backgroundColor: theme.tokens.bg.active,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})
