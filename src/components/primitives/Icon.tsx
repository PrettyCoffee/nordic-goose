import { splitProps } from "solid-js"

import { FeatherIcon, IconBaseProps } from "./icons"

type IconSize = "sm" | "md" | "lg" | "xl"

const sizes: Record<IconSize, number> = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
}

const getIconSize = (size?: IconSize | number) =>
  typeof size === "number" ? size : sizes[size || "md"]

interface IconProps extends Pick<IconBaseProps, "color" | "className"> {
  icon: FeatherIcon
  size?: IconSize | number
}

export const Icon = (props: IconProps) => {
  const [{ icon: Icon, size }, delegated] = splitProps(props, ["icon", "size"])
  return <Icon size={getIconSize(size)} {...delegated} />
}
