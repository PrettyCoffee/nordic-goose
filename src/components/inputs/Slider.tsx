import { createEffect, createSignal, splitProps } from "solid-js"

import { valueText, wrapper, input } from "./Slider.css"

type SliderProps = {
  label: string
  value: number
  getValueText?: (value: number) => string
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export const Slider = (props: SliderProps) => {
  const [value, setValue] = createSignal(props.value)
  const [{ getValueText, label, onChange }, inputProps] = splitProps(props, [
    "getValueText",
    "label",
    "onChange",
  ])

  let ref!: HTMLInputElement
  createEffect(() => {
    ref.value = String(props.value)
  })

  return (
    <label class={wrapper}>
      {label}
      <input
        ref={ref}
        type="range"
        class={input}
        onChange={e => onChange(Number(e.currentTarget.value))}
        onInput={e => setValue(Number(e.currentTarget.value))}
        {...inputProps}
      />
      <div class={valueText}>{getValueText?.(value()) || value()}</div>
    </label>
  )
}
