import { onCleanup, onMount } from "solid-js"

type Target = Window | Document | HTMLElement | null
type EventName = keyof WindowEventMap

interface Args<E extends EventName> {
  ref?: Target
  type: E
  listener: (e: WindowEventMap[E]) => void
  options?: EventListenerOptions
}

export const createEventListener = <E extends EventName>({
  ref = window,
  type,
  listener,
  options,
}: Args<E>) => {
  const add = () => ref?.addEventListener(type, listener as any, options)
  const remove = () => ref?.removeEventListener(type, listener as any, options)

  onMount(add)
  onCleanup(remove)

  return { add, remove }
}
