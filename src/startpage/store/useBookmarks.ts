import { createSignal, onCleanup } from "solid-js"

import { BookmarkNode, readBookmarks, bookmarksListener } from "../../utils"

const initialBookmarks = readBookmarks()

export const useBookmarks = () => {
  const [groups, setGroups] = createSignal<BookmarkNode[]>([])
  initialBookmarks.then(setGroups)

  const updateGroups = () => readBookmarks().then(setGroups)
  const listener = bookmarksListener(updateGroups)

  listener.add()
  onCleanup(listener.remove)

  return groups
}
