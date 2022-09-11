import { style } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"

import { theme } from "../../theme"

export const button = style({
  position: "relative",
  width: theme.space.lg,
  height: theme.space.md,
  padding: 0,

  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  cursor: "pointer",

  color: theme.tokens.fg.base,
  selectors: {
    '&[aria-checked="true"]': {
      color: theme.tokens.fg.active.base,
    },
  },
})

export const knob = style({
  vars: {
    "--knob-size": calc.subtract(theme.space.md, theme.space.xs),
    "--knob-translate": calc.add("50%", theme.space.xxs),
  },

  position: "absolute",
  zIndex: 2,
  width: "var(--knob-size)",
  height: "var(--knob-size)",
  transform: `translate(${calc.negate("var(--knob-translate)")})`,

  transition: "transform 0.2s",
  backgroundColor: "currentColor",
  borderRadius: "50%",

  selectors: {
    '[aria-checked="true"] > &': {
      transform: `translate(var(--knob-translate))`,
    },
  },
})

export const track = style({
  position: "absolute",
  zIndex: 0,
  height: "100%",
  width: "100%",

  borderRadius: "50vh",
  backgroundColor: theme.tokens.bg.base,
  outline: theme.border.default,

  selectors: {
    ":focus-visible > &, :active > &": {
      outline: theme.border.primary,
    },
  },
})

export const label = style({
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.space.md,
  height: theme.space.lg,
  width: "max-content",
})
