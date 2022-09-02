import { createSignal, onCleanup } from "solid-js"

import { BookmarkNode, bookmarks } from "./bookmarks"

const initialBookmarks = bookmarks.read()

export const useBookmarks = () => {
  const [groups, setGroups] = createSignal<BookmarkNode[]>([])
  initialBookmarks.then(setGroups)

  const updateGroups = () => bookmarks.read().then(setGroups)
  bookmarks.listener(updateGroups).add()

  onCleanup(bookmarks.listener(updateGroups).remove)

  return groups
}
