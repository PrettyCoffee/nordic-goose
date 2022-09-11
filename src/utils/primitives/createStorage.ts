import { createSignal, onCleanup } from "solid-js"

import { keyStorage } from "../ext"

export const createStorage = <T extends unknown>(
  key: string,
  initialValue: T
) => {
  const [value, setValue] = createSignal(initialValue)

  const { get, set, onChange } = keyStorage<T>(key)

  get().then(setValue)
  onCleanup(onChange(setValue))

  return [value, set] as const
}
