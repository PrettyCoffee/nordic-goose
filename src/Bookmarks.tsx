import "./Bookmarks.styles.css"

import { Bookmark, Folder, Link } from "./components"
import { useStore } from "./store"
import { BookmarkNode } from "./store/bookmarks"

const itemStyles = {
  display: "inline-flex",
  "align-items": "center",
  gap: "4px",
  cursor: "pointer",
}

interface NodeProp {
  node: BookmarkNode
}

const BookmarkLink = (props: NodeProp) => (
  <Link href={props.node.url}>
    <span style={itemStyles}>
      <Bookmark size={14} />
      {props.node.label}
    </span>
  </Link>
)

const GroupButton = (props: NodeProp) => {
  const store = useStore()

  const setAsGroup = () => store.path.set(props.node)

  return (
    <h2>
      <button
        onClick={setAsGroup}
        style={{
          padding: 0,
          background: "transparent",
          border: "none",
          ...itemStyles,
        }}
      >
        <Folder size={14} />
        {props.node.label}
      </button>
    </h2>
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
    <div class="bookmark-group">
      {() => {
        const value = store.path.value()
        return value ? <BookmarkGroup node={value} /> : <></>
      }}
    </div>
  )
}
