import {
  Accessor,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js"
import browser from "webextension-polyfill"

import { BookmarkNode } from "../components"
import { useBookmarks } from "./useBookmarks"
import { ObjectRouterResult, useObjectRouter } from "./useObjectRouter"

const browserInfo = browser?.runtime?.getBrowserInfo()
const whichBrowser = browserInfo.then(info =>
  info.name === "Firefox" ? "firefox" : "chrome"
)

const toolbarId = { firefox: "toolbar_____", chrome: "1" }

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
  whichBrowser.then(browser => setHomeId(toolbarId[browser]))

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
