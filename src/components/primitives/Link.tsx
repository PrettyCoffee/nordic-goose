import { ParentProps } from "solid-js"

import { link } from "./Link.css"

interface LinkProps extends ParentProps {
  href?: string
  highlighted?: boolean
}

export const Link = (props: LinkProps) => (
  <a
    href={props.href}
    class={link({
      highlighted: props.highlighted,
    })}
  >
    {props.children}
  </a>
)

interface LinkButtonProps extends ParentProps {
  onClick?: () => void
  highlighted?: boolean
}

export const LinkButton = (props: LinkButtonProps) => (
  <button
    onClick={props.onClick}
    class={link({ as: "button", highlighted: props.highlighted })}
  >
    {props.children}
  </button>
)
