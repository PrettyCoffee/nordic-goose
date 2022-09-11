import { createSignal, onCleanup } from "solid-js"

import { keyStorage } from "../ext"

export const createStorage = <T extends unknown>(
  key: string,
  initialValue: T
) => {
  const [value, setValue] = createSignal(initialValue)

  const { get, set, onChange } = keyStorage<T>(key)

  get().then(existing => {
    if (existing === undefined) {
      set(initialValue)
    } else {
      setValue(existing)
    }
  })
  const removeListener = onChange(setValue)
  onCleanup(removeListener)

  return [value, set] as const
}
