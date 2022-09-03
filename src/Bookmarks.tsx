import { bookmarks } from "./Bookmarks.css"
import { Bookmark, Folder, Link, LinkButton } from "./components"
import { Icon } from "./components/primitives/Icon"
import { useStore } from "./store"
import { BookmarkNode } from "./store/bookmarks"

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

const BookmarkGroup = (props: NodeProp) => (
  <>
    {sortNodes(props.node.nodes)?.map(node =>
      node.nodes ? <GroupButton node={node} /> : <BookmarkLink node={node} />
    )}
  </>
)

export const Bookmarks = () => {
  const store = useStore()
  return (
    <div class={bookmarks()}>
      {() => {
        const value = store.path.value()
        return value ? <BookmarkGroup node={value} /> : <></>
      }}
    </div>
  )
}
