import { Component, ParentProps, splitProps } from "solid-js"

export interface IconBaseProps {
  color?: string
  size?: string | number
  class?: string
}

export type FeatherIcon = Component<IconBaseProps>

const getStyle = (size: string | number) => {
  const value = typeof size === "number" ? size + "px" : size
  return {
    height: value,
    "min-height": value,
    width: value,
    "min-width": value,
  }
}

export const IconBase = (props: IconBaseProps & ParentProps) => {
  const [{ color = "currentColor", size = "24" }, rest] = splitProps(props, [
    "color",
    "size",
  ])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style={getStyle(size)}
      {...rest}
    >
      {props.children}
    </svg>
  )
}
