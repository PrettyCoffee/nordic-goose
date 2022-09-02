import { listener } from "./listener"
import { read } from "./read"

export type { BookmarkNode } from "./read"

export const bookmarks = {
  read,
  listener,
}
