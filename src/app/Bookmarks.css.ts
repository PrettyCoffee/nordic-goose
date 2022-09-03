import { calc } from "@vanilla-extract/css-utils"
import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../theme"

const bookmarkHeight = calc.multiply(theme.space.md, 1.5)

export const bookmarks = recipe({
  base: {
    display: "inline-grid",
    gridTemplateRows: `repeat(4, ${bookmarkHeight})`,
    gridAutoFlow: "column",
    columnGap: theme.space.md,
  },
})
