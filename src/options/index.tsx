/* @refresh reload */
import { render } from "solid-js/web"

import { StoreProvider } from "../store"
import { ThemeProvider } from "../theme"
import { App } from "./App"

render(
  () => (
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  ),
  document.getElementById("root") as HTMLElement
)
