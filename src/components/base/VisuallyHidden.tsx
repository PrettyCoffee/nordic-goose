import { ParentProps } from "solid-js"

import { visuallyHidden } from "./VisuallyHidden.css"

export const VisuallyHidden = (props: ParentProps) => (
  <span class={visuallyHidden()} {...props} />
)
