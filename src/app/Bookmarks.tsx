import { Accessor, createMemo } from "solid-js"

import { Bookmark, Folder, Link, LinkButton, Icon } from "../components"
import { useStore, BookmarkNode } from "../store"
import { bookmarks } from "./Bookmarks.css"

interface NodeProp {
  node: BookmarkNode
}

const BookmarkLink = (props: NodeProp) => (
  <Link href={props.node.url}>
    <Icon icon={Bookmark} size="md" />
    {props.node.label}
  </Link>
)

const GroupButton = (props: NodeProp) => {
  const store = useStore()
  const setAsGroup = () => store.path.set(props.node)
  return (
    <LinkButton onClick={setAsGroup} highlighted>
      <Icon icon={Folder} size="md" />
      {props.node.label}
    </LinkButton>
  )
}

const sortNodes = (nodes?: BookmarkNode[]) =>
  nodes?.sort((a, b) => {
    if (a.nodes && !b.nodes) return -1
    if (!a.nodes && b.nodes) return 1
    return a.label.toLowerCase() < b.label.toLowerCase() ? -1 : 1
  })

const flattenNodes = (nodes: BookmarkNode[]): BookmarkNode[] =>
  nodes.flatMap(node => (node.nodes ? flattenNodes(node.nodes) : [node]))

const noCaseMatch = (value: string, search: string) =>
  value.toLowerCase().includes(search.toLowerCase())

const filterBookmarks = (nodes: BookmarkNode[], value: string) =>
  flattenNodes(nodes).filter(
    node =>
      noCaseMatch(node.label, value) ||
      (node.url ? noCaseMatch(new URL(node.url).hostname, value) : false)
  )

interface BookmarksProps {
  filter?: Accessor<string>
}

/** TODO: Add options for case sensitive search and "in path" search
 * Add toggles "g" and "i" in a square at the end of the search field
 */
export const Bookmarks = (props: BookmarksProps) => {
  const store = useStore()

  const visibleBookmarks = createMemo(() => {
    const currentGroup = store.path.value()
    const filter = props.filter?.()
    if (!filter || filter.length < 1) return currentGroup?.nodes

    return filterBookmarks(store.bookmarks(), filter)
  })

  return (
    <div class={bookmarks()}>
      {sortNodes(visibleBookmarks())?.map(node =>
        node.nodes ? <GroupButton node={node} /> : <BookmarkLink node={node} />
      )}
    </div>
  )
}
