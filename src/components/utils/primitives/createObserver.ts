import { Accessor, createRenderEffect, on, onCleanup, onMount } from "solid-js"

interface ObserverArgs {
  ref: Accessor<HTMLElement | null>
  callback: (element: HTMLElement | null) => void
  options?: MutationObserverInit
}

export const createObserver = ({ ref, callback, options }: ObserverArgs) => {
  const cb = () => callback(ref())

  const observer = new MutationObserver(cb)

  const add = (element: HTMLElement | null) =>
    element && observer.observe(element, options)
  const start = () => add(ref())
  const stop = () => observer.disconnect()

  onMount(start)
  createRenderEffect(on(ref, start))
  onCleanup(stop)

  return {
    add,
    start,
    stop,
  }
}
