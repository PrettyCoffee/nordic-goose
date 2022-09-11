import { style } from "@vanilla-extract/css"

export const layout = style({
  display: "flex",
  gap: "2rem",
  height: "150px",
  alignItems: "center",
})

export const column = style({
  display: "flex",
  flexDirection: "column",
  flex: "1",
})
