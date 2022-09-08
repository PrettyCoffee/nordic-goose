import { createTheme } from "@vanilla-extract/css"
type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
type Color = Record<Number, string>

const getColors = (hue: number, saturation: number): Color => ({
  1: `hsl(${hue}, ${saturation}%, 92%)`,
  2: `hsl(${hue}, ${saturation}%, 86%)`,
  3: `hsl(${hue}, ${saturation}%, 80%)`,
  4: `hsl(${hue}, ${saturation}%, 74%)`,
  5: `hsl(${hue}, ${saturation}%, 68%)`,
  6: `hsl(${hue}, ${saturation}%, 62%)`,
  7: `hsl(${hue}, ${saturation}%, 56%)`,
  8: `hsl(${hue}, ${saturation}%, 50%)`,
  9: `hsl(${hue}, ${saturation}%, 44%)`,
  10: `hsl(${hue}, ${saturation}%, 38%)`,
  11: `hsl(${hue}, ${saturation}%, 32%)`,
  12: `hsl(${hue}, ${saturation}%, 26%)`,
  13: `hsl(${hue}, ${saturation}%, 20%)`,
  14: `hsl(${hue}, ${saturation}%, 14%)`,
  15: `hsl(${hue}, ${saturation}%, 8%)`,
})

const invert = (light: Color) => {
  const colors = {} as Color
  Object.values(light).forEach(
    (color, i) => (colors[(15 - i) as Number] = color)
  )
  return colors
}

interface Colors {
  neutral: Color
  primary: Color
  secondary: Color
}

const light = {
  neutral: getColors(220, 18),
  primary: getColors(213, 30),
  secondary: getColors(280, 30),
}

const dark = {
  neutral: invert(light.neutral),
  primary: invert(light.primary),
  secondary: invert(light.secondary),
}

const space = {
  "3xs": "0.0625rem",
  xxs: "0.125rem",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem",
  "3xl": "5rem",
}

const border = (color: string) => `${space["xxs"]} solid ${color}`
const getBorders = (color: Colors) => ({
  default: border(color.neutral[10]),
  muted: border(color.neutral[6]),
  primary: border(color.primary[8]),
  secondary: border(color.secondary[8]),
})

const getDarkTokens = ({ neutral, primary }: Colors) => ({
  shadowHsl: "213deg 31% 30%",
  fg: {
    base: neutral[12],
    muted: neutral[6],

    hover: neutral[14],
    press: primary[15],
    focus: primary[14],

    active: {
      base: primary[10],
      hover: neutral[12],
      press: primary[13],
      focus: primary[12],
    },
  },
  bg: {
    base: neutral[3],
    surface: neutral[3],
    muted: neutral[4],
    primary: primary[8],

    input: neutral[4],
    hover: neutral[6],
    press: neutral[8],
    focus: neutral[6],
  },
})

const getLightTokens = ({ neutral, primary }: Colors) => {
  const { bg, fg } = getDarkTokens(light)
  return {
    shadowHsl: "213deg 19% 55%",
    fg: {
      ...fg,
      base: neutral[10],
      muted: neutral[4],

      hover: neutral[13],
      press: primary[15],
      focus: primary[13],

      active: {
        base: primary[7],
        hover: neutral[9],
        press: primary[11],
        focus: primary[9],
      },
    },
    bg: {
      ...bg,
      base: "hsl(220, 18%, 97%)",
      surface: "hsl(220, 18%, 97%)",
      primary: primary[4],
    },
  }
}

const font = "Quicksand, sans-serif"

export const [lighThemeClass, theme] = createTheme({
  //color: light,
  border: getBorders(light),
  tokens: getLightTokens(light),
  space,
  font,
})

export const darkThemeClass = createTheme(theme, {
  //color: dark,
  border: getBorders(dark),
  tokens: getDarkTokens(dark),
  space,
  font,
})
