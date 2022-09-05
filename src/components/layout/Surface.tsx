import { ParentProps } from "solid-js"

import { surface, surfaceContent, surfaceImage } from "./Surface.css"

const SurfaceLayout = (props: ParentProps) => <div class={surface} {...props} />

const SurfaceMain = (props: ParentProps) => (
  <main class={surfaceContent} {...props} />
)

const SurfaceImage = (props: {
  src: string
  alt: string
  height?: string
  width?: string
}) => (
  <img
    class={surfaceImage}
    style={{ height: props.height, width: props.width }}
    src={props.src}
    alt={props.alt}
  />
)

export const Surface = Object.assign(SurfaceLayout, {
  Main: SurfaceMain,
  Image: SurfaceImage,
})
