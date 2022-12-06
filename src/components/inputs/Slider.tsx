import { createEffect, createMemo, createSignal, splitProps } from "solid-js"

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
  let lastProps = props.value
  const [value, setValue] = createSignal(props.value)
  const [{ getValueText, label, onChange }, inputProps] = splitProps(props, [
    "getValueText",
    "label",
    "onChange",
  ])
  const valueLabel = createMemo(
    () => getValueText?.(value()) || String(value())
  )

  let ref!: HTMLInputElement
  createEffect(() => {
    ref.value = String(props.value)
    if (lastProps !== props.value) {
      setValue(props.value)
      lastProps = props.value
    }
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
      <div class={valueText}>{valueLabel()}</div>
    </label>
  )
}
