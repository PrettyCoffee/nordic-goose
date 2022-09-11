import { Text } from "../primitives"
import { label, button, knob, track } from "./Switch.css"

type SwitchProps = {
  onChange: (value: boolean) => void
  checked: boolean
  label: string
}

export const Switch = (props: SwitchProps) => {
  const handleClick = () => props.onChange?.(!props.checked)

  return (
    <label class={label}>
      <button
        class={button}
        role="switch"
        aria-checked={props.checked}
        onClick={handleClick}
      >
        <span class={knob} />
        <span class={track} />
      </button>
      <Text nowrap>{props.label}</Text>
    </label>
  )
}
