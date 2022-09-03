import { ParentProps, splitProps } from "solid-js"

import { input, layout } from "./TextInput.css"

export interface TextInputProps extends ParentProps {
  placeholder?: string
  autofocus?: boolean
  onChange?: (value: string) => void
  onKeyDown?: (key: string) => void
}

export const TextInput = (props: TextInputProps) => {
  const [{ onChange, onKeyDown }, delegated] = splitProps(props, [
    "onChange",
    "onKeyDown",
  ])
  return (
    <div class={layout()}>
      {props.children}
      <input
        type="text"
        class={input()}
        onInput={e => onChange?.(e.currentTarget.value)}
        onKeyDown={e => onKeyDown?.(e.key)}
        {...delegated}
      />
    </div>
  )
}
