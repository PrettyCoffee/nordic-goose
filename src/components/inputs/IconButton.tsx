import { createMemo } from "solid-js"

import { VisuallyHidden } from "../base"
import { FeatherIcon } from "../primitives"
import { Icon } from "../primitives/Icon"
import { iconbutton } from "./IconButton.css"

interface IconButtonProps {
  icon: FeatherIcon
  caption: string
  onClick: () => void
}

interface IconLinkProps extends Omit<IconButtonProps, "onClick"> {
  href: string
}

const Content = (props: IconButtonProps | IconLinkProps) => (
  <>
    <Icon icon={props.icon} size={18} />
    <VisuallyHidden>{props.caption}</VisuallyHidden>
  </>
)

export const IconButton = (props: IconButtonProps | IconLinkProps) => {
  const commonProps = createMemo(() => ({
    class: iconbutton(),
    title: props.caption,
  }))
  return (
    <>
      {"onClick" in props ? (
        <button onClick={props.onClick} {...commonProps}>
          <Content {...props} />
        </button>
      ) : (
        <a href={props.href} {...commonProps}>
          <Content {...props} />
        </a>
      )}
    </>
  )
}
