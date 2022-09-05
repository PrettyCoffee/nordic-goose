import { ParentProps } from "solid-js"

import { Icon } from "./Icon"
import { FeatherIcon } from "./icons"
import { link, LinkVariants } from "./Link.css"
import { Text } from "./Text"

const linkFromProps = (as: "a" | "button", args: LinkProps | LinkButtonProps) =>
  (args.class ? `${args.class} ` : "") +
  link({
    as,
    nowrap: args.nowrap,
    highlighted: args.highlighted,
  })

const LinkContent = (props: LinkProps | LinkButtonProps) => (
  <>
    {props.icon && <Icon icon={props.icon} size="md" />}
    <Text nowrap={props.nowrap}>{props.children}</Text>
  </>
)

type LinkProps = ParentProps &
  Omit<LinkVariants, "as"> & {
    icon?: FeatherIcon
    href?: string
    class?: string
  }

interface LinkButtonProps extends Omit<LinkProps, "href"> {
  onClick?: () => void
}

export const Link = (props: LinkProps | LinkButtonProps) =>
  "href" in props ? (
    <a href={props.href} class={linkFromProps("a", props)}>
      <LinkContent {...props} />
    </a>
  ) : "onClick" in props ? (
    <button onClick={props.onClick} class={linkFromProps("button", props)}>
      <LinkContent {...props} />
    </button>
  ) : (
    <LinkContent {...props} />
  )
