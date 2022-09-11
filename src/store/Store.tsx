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
  hideGithub: {
    toggle: () => void
    get: Accessor<boolean>
  }
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
  hideGithub: {
    toggle: () => null,
    get: () => false,
  },
})

const initialHome = await whichBrowser.then(browser => toolbarId[browser])
export const StoreProvider = (props: ParentProps) => {
  const [homeId, setHomeId] = createStorage<string | null>("home", initialHome)
  const [hideGithub, setHideGithub] = createStorage("hide-github-button", false)

  const themeMode = useThemeMode()
  const bookmarks = useBookmarks()
  const path = useObjectRouter({ nodes: bookmarks, homeId })

  const toggleHideGithub = () => setHideGithub(!hideGithub())

  return (
    <Context.Provider
      value={{
        path,
        bookmarks,
        setHomeId,
        themeMode,
        hideGithub: {
          get: hideGithub,
          toggle: toggleHideGithub,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)
