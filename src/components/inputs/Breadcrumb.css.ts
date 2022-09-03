import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../theme"
import { link } from "../primitives/Link.css"

export const breadcrumb = recipe({
  base: {},
})

export const breadcrumbItem = recipe({
  base: [
    link({ as: "button" }),
    {
      width: "unset",
      paddingLeft: theme.space.sm,
      paddingRight: theme.space.sm,
    },
  ],
  variants: {
    highlighted: { true: link({ as: "button", highlighted: true }) },
  },
  defaultVariants: { highlighted: false },
})

export const separator = recipe({
  base: {
    color: theme.tokens.fg.muted,
  },
})
