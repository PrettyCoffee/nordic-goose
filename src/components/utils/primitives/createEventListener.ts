import { onCleanup, onMount } from "solid-js"

import { ensureArray } from "../helpers"

type Target = Window | Document | HTMLElement | null
type EventName = keyof WindowEventMap

interface Args<E extends EventName> {
  ref?: Target
  type: E | E[]
  listener: (e: WindowEventMap[E]) => void
  options?: EventListenerOptions
}

export const createEventListener = <E extends EventName>({
  ref = window,
  type,
  listener,
  options,
}: Args<E>) => {
  const add = () =>
    ensureArray(type).forEach(t =>
      ref?.addEventListener(t, listener as any, options)
    )
  const remove = () =>
    ensureArray(type).forEach(t =>
      ref?.removeEventListener(t, listener as any, options)
    )

  onMount(add)
  onCleanup(remove)

  return { add, remove }
}
