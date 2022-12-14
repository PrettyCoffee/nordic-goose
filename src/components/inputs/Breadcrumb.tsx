import { For, ParentProps } from "solid-js"

import { createRef, useKeyboardNavigation } from "../../utils"
import { Link } from "../primitives"
import { breadcrumb, separator } from "./Breadcrumb.css"

const Separator = () => <span class={separator}>/</span>

interface ButtonProps extends ParentProps {
  onClick: () => void
  nowrap?: boolean
  highlighted?: boolean
}
const BreadcrumbItem = (props: ButtonProps) => (
  <>
    <Link
      onClick={props.onClick}
      highlighted={props.highlighted}
      nowrap={props.nowrap}
    >
      {props.children}
    </Link>
    <Separator />
  </>
)

interface BreadcrumbProps<T extends object> {
  path: T[]
  labelAccessor: keyof T
  onChange: (item: T | null) => void
}

export const Breadcrumb = <T extends object>(props: BreadcrumbProps<T>) => {
  const [ref, setRef] = createRef()

  useKeyboardNavigation({
    ref,
    selector: "button",
    preserveState: true,
    keys: {
      next: "ArrowRight",
      prev: "ArrowLeft",
      first: "Home",
      last: "End",
    },
  })

  return (
    <div ref={setRef} class={breadcrumb}>
      <BreadcrumbItem highlighted onClick={() => props.onChange(null)}>
        ~
      </BreadcrumbItem>
      <For each={props.path}>
        {item => (
          <BreadcrumbItem onClick={() => props.onChange(item)} nowrap>
            {item[props.labelAccessor] as string}
          </BreadcrumbItem>
        )}
      </For>
    </div>
  )
}
