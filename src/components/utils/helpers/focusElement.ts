const isFocusable = (
  target?: Element | HTMLInputElement
): target is Element & { focus: () => void } =>
  target != null && "focus" in target && typeof target.focus === "function"

const isSelectable = (
  target?: Element | HTMLInputElement
): target is Element & { select: () => void } =>
  target != null && "select" in target && typeof target.select === "function"

export const focusElement = (target?: Element) => {
  if (isFocusable(target)) target.focus()
  if (isSelectable(target)) target.select()
}
