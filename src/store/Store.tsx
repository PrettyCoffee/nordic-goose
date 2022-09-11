import { Accessor, createContext, ParentProps, useContext } from "solid-js"

import { darkThemeClass } from "../theme/theme.css"
import { BookmarkNode, whichBrowser, createStorage } from "../utils"
import { useBookmarks } from "./useBookmarks"
import { ObjectRouterResult, useObjectRouter } from "./useObjectRouter"
import { ModeState, useThemeMode } from "./useThemeMode"

const toolbarId = { firefox: "toolbar_____", chromium: "1" }

interface ContextState {
  path: ObjectRouterResult
  bookmarks: Accessor<BookmarkNode[]>
  setHomeId: (id: string) => void
  themeMode: ModeState
}

const Context = createContext<ContextState>({
  path: {
    value: () => null,
    get: () => [],
    set: () => null,
  },
  bookmarks: () => [],
  setHomeId: () => null,
  themeMode: {
    get: () => "dark",
    toggle: () => null,
    class: () => darkThemeClass,
  },
})

const initialHome = await whichBrowser.then(browser => toolbarId[browser])
export const StoreProvider = (props: ParentProps) => {
  const [homeId, setHomeId] = createStorage<string | null>("home", initialHome)
  const themeMode = useThemeMode()

  const bookmarks = useBookmarks()
  const path = useObjectRouter({ nodes: bookmarks, homeId })

  return (
    <Context.Provider
      value={{
        path,
        bookmarks,
        setHomeId,
        themeMode,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)
