import { createSignal, onCleanup } from "solid-js"

import { bookmarks, BookmarkNode } from "../utils"

const initialBookmarks = bookmarks.read()

export const useBookmarks = () => {
  const [groups, setGroups] = createSignal<BookmarkNode[]>([])
  initialBookmarks.then(setGroups)

  const updateGroups = () => bookmarks.read().then(setGroups)
  const listener = bookmarks.listen(updateGroups)

  listener.add()
  onCleanup(listener.remove)

  return groups
}
