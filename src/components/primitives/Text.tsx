import { ParentProps } from "solid-js"

import { text } from "./Text.css"

interface TextProps extends ParentProps {
  nowrap?: boolean
}

export const Text = (props: TextProps) => (
  <h1 class={text({ as: "span", nowrap: props.nowrap })}>{props.children}</h1>
)

export const Headline = (props: TextProps) => (
  <h1 class={text({ as: "h1", nowrap: props.nowrap })}>{props.children}</h1>
)
