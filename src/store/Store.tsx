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
  duckMode: {
    toggle: () => void
    get: Accessor<boolean>
  }
  maxWidth: {
    set: (value: number) => void
    get: Accessor<number>
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
    set: () => null,
  },
  hideGithub: {
    toggle: () => null,
    get: () => false,
  },
  duckMode: {
    toggle: () => null,
    get: () => false,
  },
  maxWidth: {
    set: () => null,
    get: () => 0,
  },
})

const initialHome = await whichBrowser.then(browser => toolbarId[browser])
export const StoreProvider = (props: ParentProps) => {
  const [homeId, setHomeId] = createStorage<string | null>("home", initialHome)
  const [hideGithub, setHideGithub] = createStorage("hide-github-button", false)
  const [duckMode, setDuckMode] = createStorage("duck-mode", false)
  const [maxWidth, setMaxWidth] = createStorage("max-surface-width", 800)

  const themeMode = useThemeMode()
  const bookmarks = useBookmarks()
  const path = useObjectRouter({ nodes: bookmarks, homeId })

  const toggleHideGithub = () => setHideGithub(!hideGithub())
  const toggleDuckMode = () => setDuckMode(!duckMode())

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
        maxWidth: {
          get: maxWidth,
          set: setMaxWidth,
        },
        duckMode: {
          toggle: toggleDuckMode,
          get: duckMode,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)
