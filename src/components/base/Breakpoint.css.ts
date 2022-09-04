import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"

const media = createSprinkles(
  defineProperties({
    conditions: {
      mobile: { "@media": "screen and (max-width: 600px)" },
      tablet: {
        "@media": "screen and (min-width: 601px) and (max-width: 1100px)",
      },
      laptop: {
        "@media": "screen and (min-width: 1101px) and (max-width: 1500px)",
      },
      desktop: { "@media": "screen and (min-width: 1501px)" },
    },
    defaultCondition: "mobile",
    properties: {
      display: ["none", "unset"],
    },
  })
)

export const breakpoint = recipe({
  base: {
    display: "none",
  },
  variants: {
    mobile: {
      true: media({
        display: {
          mobile: "unset",
        },
      }),
    },
    tablet: {
      true: media({
        display: {
          tablet: "unset",
        },
      }),
    },
    laptop: {
      true: media({
        display: {
          laptop: "unset",
        },
      }),
    },
    desktop: {
      true: media({
        display: {
          desktop: "unset",
        },
      }),
    },
  },
  defaultVariants: {
    mobile: false,
    tablet: false,
    laptop: false,
    desktop: false,
  },
})

export type BreakpointVariants = RecipeVariants<typeof breakpoint>
