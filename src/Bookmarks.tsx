import "./Bookmarks.styles.css"
import { createSignal, For } from "solid-js"

import { BookmarkNode, bookmarks } from "./bookmarks/index"
import { Link } from "./components"

const BookmarkGroup = (props: { group: BookmarkNode }) => (
  <>
    <h2>{props.group.label}</h2>
    {props.group.bookmarks?.map(node =>
      node.bookmarks ? (
        <BookmarkGroup group={node} />
      ) : (
        <Link href={node.url}>{node.label}</Link>
      )
    )}
  </>
)

export const Bookmarks = () => {
  const [groups, setGroups] = createSignal<BookmarkNode[]>([])

  const updateGroups = () => bookmarks.read().then(setGroups)
  updateGroups()
  bookmarks.listener(updateGroups).add()

  return (
    <div class="bookmark-group">
      <For each={groups()}>
        {group => (
          <>
            <BookmarkGroup group={group} />
          </>
        )}
      </For>
    </div>
  )
}
