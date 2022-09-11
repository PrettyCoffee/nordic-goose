import "./globalStyles.css"
import {
  Accessor,
  createContext,
  createMemo,
  ParentProps,
  useContext,
} from "solid-js"

import { createStorage } from "../utils"
import { darkThemeClass, lighThemeClass } from "./theme.css"

type Mode = "dark" | "light"

interface ContextState {
  toggleMode: () => void
  mode: Accessor<Mode>
  themeClass: Accessor<string>
}

const Context = createContext<ContextState>({
  toggleMode: () => null,
  themeClass: () => "",
  mode: () => "dark",
})

export const ThemeProvider = (props: ParentProps) => {
  const [mode, setMode] = createStorage<Mode>("theme-mode", "dark")
  const themeClass = createMemo(() =>
    mode() === "dark" ? darkThemeClass : lighThemeClass
  )

  const toggleMode = () => setMode(mode() === "dark" ? "light" : "dark")

  return (
    <Context.Provider value={{ toggleMode, mode, themeClass }}>
      {props.children}
    </Context.Provider>
  )
}

export const useTheme = () => useContext(Context)
