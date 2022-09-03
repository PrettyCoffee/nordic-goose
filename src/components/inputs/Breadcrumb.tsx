import { For, ParentProps } from "solid-js"

import { breadcrumb, separator, breadcrumbItem } from "./Breadcrumb.css"

const Separator = () => <span class={separator()}>/</span>

interface ButtonProps extends ParentProps {
  onClick: () => void
  highlighted?: boolean
}
const BreadcrumbItem = (props: ButtonProps) => (
  <>
    <button
      onClick={props.onClick}
      class={breadcrumbItem({ highlighted: props.highlighted })}
    >
      {props.children}
    </button>
    <Separator />
  </>
)

interface BreadcrumbProps<T extends object> {
  path: T[]
  labelAccessor: keyof T
  onChange: (item: T | null) => void
}

export const Breadcrumb = <T extends object>(props: BreadcrumbProps<T>) => (
  <div class={breadcrumb()}>
    <BreadcrumbItem highlighted onClick={() => props.onChange(null)}>
      ~
    </BreadcrumbItem>
    <For each={props.path}>
      {item => (
        <BreadcrumbItem onClick={() => props.onChange(item)}>
          {item[props.labelAccessor] as string}
        </BreadcrumbItem>
      )}
    </For>
  </div>
)
