import { ParentProps, splitProps } from "solid-js"

import { breakpoint, BreakpointVariants } from "./Breakpoint.css"

type BreakpointProps = BreakpointVariants &
  ParentProps & {
    class?: string
  }

export const Breakpoint = (props: BreakpointProps) => {
  const [{ children, class: className = "" }, variants] = splitProps(props, [
    "children",
    "class",
  ])
  return <div class={className + breakpoint(variants)}>{children}</div>
}
