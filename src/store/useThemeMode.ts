import { Accessor, createMemo } from "solid-js"

import {
  darkThemeClass,
  lighThemeClass,
  ctpThemeClass,
} from "../theme/theme.css"
import { createStorage } from "../utils"

type Mode = "dark" | "light" | "gooseppuccin"
export interface ModeState {
  get: Accessor<Mode>
  toggle: () => void
  class: Accessor<string>
  set: (mode: Mode) => void
}

const themes: Record<Mode, string> = {
  dark: darkThemeClass,
  light: lighThemeClass,
  gooseppuccin: ctpThemeClass,
}

export const useThemeMode = (): ModeState => {
  const [mode, setMode] = createStorage<Mode>("theme-mode", "dark")
  const themeClass = createMemo(() => themes[mode() || "dark"])

  const toggleMode = () =>
    setMode(
      mode() === "dark" ? "light" : mode() === "light" ? "gooseppuccin" : "dark"
    )

  return { get: mode, toggle: toggleMode, set: setMode, class: themeClass }
}
