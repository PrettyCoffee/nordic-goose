import Browser from "webextension-polyfill"

const removeListener = (listener: () => void) => {
  Browser.bookmarks.onChanged.removeListener(listener)
  Browser.bookmarks.onCreated.removeListener(listener)
  Browser.bookmarks.onMoved.removeListener(listener)
  Browser.bookmarks.onRemoved.removeListener(listener)
}

const hasListener = (listener: () => void) =>
  Browser.bookmarks.onChanged.hasListener(listener) ||
  Browser.bookmarks.onCreated.hasListener(listener) ||
  Browser.bookmarks.onMoved.hasListener(listener) ||
  Browser.bookmarks.onRemoved.hasListener(listener)

const addListener = (listener: () => void) => {
  if (hasListener(listener)) removeListener(listener)

  Browser.bookmarks.onChanged.addListener(listener)
  Browser.bookmarks.onCreated.addListener(listener)
  Browser.bookmarks.onMoved.addListener(listener)
  Browser.bookmarks.onRemoved.addListener(listener)
}

export const listener = (listener: () => void) => ({
  add: () => addListener(listener),
  remove: () => removeListener(listener),
  isApplied: () => hasListener(listener),
})
