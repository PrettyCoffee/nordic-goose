import Browser, { Bookmarks } from "webextension-polyfill"

export interface BookmarkNode {
  id: string
  label: string
  url?: string
  bookmarks?: BookmarkNode[]
}

const extractInfos = ({
  id,
  title,
  children,
  url,
}: Bookmarks.BookmarkTreeNode): BookmarkNode => ({
  id,
  label: title,
  ...(children ? { bookmarks: children?.map(extractInfos) } : { url }),
})

const rename: Record<string, string> = {
  // firefox
  menu________: "menu",
  toolbar_____: "toolbar",
  unfiled_____: "others",
  mobile______: "mobile",

  // chrome
  "1": "toolbar",
  "2": "others",
}

const improveRootNodes = (bookmarks: BookmarkNode[]) => {
  const root = bookmarks[0].bookmarks || []
  return root.reduce((result, group) => {
    if (!group.bookmarks?.length) return result
    group.label = rename[group.id] || group.label
    return [...result, group]
  }, [] as BookmarkNode[])
}

export const read = () =>
  Browser.bookmarks
    .getTree()
    .then(bookmarks => bookmarks.map(extractInfos))
    .then(improveRootNodes)
