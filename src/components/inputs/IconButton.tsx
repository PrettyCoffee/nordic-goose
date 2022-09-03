import { VisuallyHidden } from "../base"
import { FeatherIcon } from "../primitives"
import { Icon } from "../primitives/Icon"
import { iconbutton } from "./IconButton.css"

interface IconButtonProps {
  icon: FeatherIcon
  caption?: string
  onClick?: () => void
}

export const IconButton = (props: IconButtonProps) => (
  <button class={iconbutton()} onClick={props.onClick}>
    <Icon icon={props.icon} size={18} />
    <VisuallyHidden>{props.caption}</VisuallyHidden>
  </button>
)
