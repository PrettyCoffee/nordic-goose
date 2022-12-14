import { style } from "@vanilla-extract/css"

export const visuallyHidden = style({
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  border: "0px none",
})
