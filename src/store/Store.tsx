import {
  Accessor,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js"

import { BookmarkNode } from "./bookmarks"
import { useBookmarks } from "./useBookmarks"
import { ObjectRouterResult, useObjectRouter } from "./useObjectRouter"

interface ContextState {
  path: ObjectRouterResult
  bookmarks: Accessor<BookmarkNode[]>
  setHomeId: (id: string) => void
}

const Context = createContext<ContextState>({
  path: {
    value: () => null,
    get: () => [],
    set: () => null,
  },
  bookmarks: () => [],
  setHomeId: () => null,
})

export const StoreProvider = (props: ParentProps) => {
  const [homeId, setHomeId] = createSignal<string | null>(null)
  const bookmarks = useBookmarks()
  const path = useObjectRouter({ nodes: bookmarks, homeId })

  return (
    <Context.Provider
      value={{
        path,
        bookmarks,
        setHomeId,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)
