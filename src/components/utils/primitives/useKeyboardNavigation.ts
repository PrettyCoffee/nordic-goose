import { Accessor, createEffect, createSignal, on } from "solid-js"

import { clamp, focusElement } from "../helpers"
import { createEventListener } from "./createEventListener"
import { createObserver } from "./createObserver"

interface Args {
  ref: Accessor<HTMLElement | null>
  selector: string
  // TODO: preserveState: boolean
  keys: {
    prev: string
    next: string
    first: string
    last: string
    others?: [string, (index: number) => number][]
  }
}

const getChildren = (element: HTMLElement | null, selector: string) => {
  if (!element) return []
  return Array.from(element.querySelectorAll(selector))
}

const setTabIndex = (element: Element | null, index: number) => {
  if (element && "tabIndex" in element) (element as any).tabIndex = index
}

export const useKeyboardNavigation = ({ ref, selector, keys }: Args) => {
  const [children, setChildren] = createSignal<Element[]>([])
  createObserver({
    ref,
    callback: el => setChildren(getChildren(el, selector)),
    options: { childList: true },
  })

  let focused: number | null = null
  let focusableElement: Element | null = null

  const focusOnIndex = (index: number | null) => {
    const elements = children()
    const target = elements[index || 0]
    focusElement(target)
  }

  const setFocusableElement = (element: Element | null) => {
    setTabIndex(focusableElement, -1)
    setTabIndex(element, 0)
    focusableElement = element
  }

  const setFocused = (index: number | null) => {
    if (index == null) {
      focused = null
      setFocusableElement(ref())
    } else {
      focused = index
      setFocusableElement(children()[index])
      focusOnIndex(index)
    }
  }

  createEffect(
    on(children, () => {
      children().forEach(child => setTabIndex(child, -1))
      /** if focusableElement is not inside ref anymore
       *  We will want to focus index 0
       **/
      if (focused != null && !ref()?.contains(focusableElement)) setFocused(0)
    })
  )

  const changeFocus = (
    key: string,
    keys: string,
    callback: (value: number) => number
  ) => {
    if (!keys.includes(key)) return false
    const maxIndex = children().length - 1
    const newIndex = clamp(callback(focused || 0), 0, maxIndex)
    if (focused !== newIndex) setFocused(newIndex)

    return true
  }

  createEffect(
    on(ref, () => {
      const element = ref()
      setTabIndex(element, 0)

      const navigate = ({ key }: KeyboardEvent) => {
        changeFocus(key, keys.next, i => i + 1)
        changeFocus(key, keys.prev, i => i - 1)
        changeFocus(key, keys.first, () => 0)
        changeFocus(key, keys.last, () => children().length)
        keys.others?.forEach(([k, cb]) => changeFocus(key, k, cb))
      }

      createEventListener({
        ref: element,
        type: "keydown",
        listener: navigate,
      })

      const { add: addLeave, remove: removeLeave } = createEventListener({
        ref: window,
        type: "focusout",
        listener: e => {
          if (e.target && !element?.contains(e.target as Node)) {
            setFocused(null)
            removeLeave()
          }
        },
      })

      createEventListener({
        ref: element,
        type: "focusin",
        listener: () => {
          if (focusableElement === ref()) setFocused(0)
          addLeave()
        },
      })
    })
  )
}
