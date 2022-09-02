import "./Link.styles.css"
import { ParentProps } from "solid-js"

interface LinkProps extends ParentProps {
  href?: string
}

export const Link = (props: LinkProps) => (
  <a class="link" href={props.href}>
    {props.children}
  </a>
)
