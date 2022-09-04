import { ParentProps } from "solid-js"

import { text, TextVariants } from "./Text.css"

type TextProps = Omit<ParentProps & TextVariants, "as">

export const Text = (props: TextProps) => (
  <span
    class={text({ as: "span", nowrap: props.nowrap, inherit: props.inherit })}
  >
    {props.children}
  </span>
)

export const Headline = (props: TextProps) => (
  <h1 class={text({ as: "h1", nowrap: props.nowrap, inherit: props.inherit })}>
    {props.children}
  </h1>
)
