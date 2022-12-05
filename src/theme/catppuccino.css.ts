const text = (light: number) => `hsl(226, 64%, ${light}%)`
const bg = (light: number) => `hsl(240, 20%, ${light}%)`
const primary = (light: number) => `hsl(220, 90%, ${light}%)`

export const tokens = {
  shadowHsl: "220deg 40% 45%",
  fg: {
    muted: "hsl(230, 13%, 55%)",

    base: text(85),
    hover: text(90),
    press: text(95),
    focus: text(90),

    active: {
      base: primary(75),
      hover: primary(80),
      press: primary(85),
      focus: primary(80),
    },
  },
  bg: {
    base: bg(15),
    surface: bg(12),
    primary: primary(75),
    hover: bg(40),
  },
}
