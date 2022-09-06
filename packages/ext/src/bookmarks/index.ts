import { bookmarksListener } from "./bookmarksListener"
import { readBookmarks } from "./readBookmarks"

export type { BookmarkNode } from "./readBookmarks"

export const bookmarks = {
  read: readBookmarks,
  listen: bookmarksListener,
}
