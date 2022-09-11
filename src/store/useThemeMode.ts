import { Accessor, createMemo } from "solid-js"

import { darkThemeClass, lighThemeClass } from "../theme/theme.css"
import { createStorage } from "../utils"

type Mode = "dark" | "light"
export interface ModeState {
  get: Accessor<Mode>
  toggle: () => void
  class: Accessor<string>
}

export const useThemeMode = (): ModeState => {
  const [mode, setMode] = createStorage<Mode>("theme-mode", "dark")
  const themeClass = createMemo(() =>
    mode() === "dark" ? darkThemeClass : lighThemeClass
  )

  const toggleMode = () => setMode(mode() === "dark" ? "light" : "dark")

  return { get: mode, toggle: toggleMode, class: themeClass }
}
