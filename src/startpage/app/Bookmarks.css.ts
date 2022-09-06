import { style } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"

import { theme } from "../../theme"

const bookmarkHeight = calc.multiply(theme.space.md, 1.5)

export const scrollX = style({
  overflowX: "auto",
  marginBottom: "-0.5rem",
  paddingBottom: "0.5rem",
})

export const bookmarks = style({
  display: "inline-grid",
  gridTemplateRows: `repeat(4, ${bookmarkHeight})`,
  gridAutoFlow: "column",
  columnGap: theme.space.md,
})

export const bookmark = style({
  minWidth: "7rem",
})
