import "./IconButton.styles.css"
import { FeatherIcon } from "../primitives"

interface IconButtonProps {
  icon: FeatherIcon
  caption?: string
  onClick?: () => void
}

export const IconButton = (props: IconButtonProps) => (
  <button class="icon-button" onClick={props.onClick}>
    <props.icon size="1.2rem" />
    <span class="visually-hidden">{props.caption}</span>
  </button>
)
