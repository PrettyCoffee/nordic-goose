/* @refresh reload */
import { render } from "solid-js/web"

import { App } from "./app/App"
import { StoreProvider } from "./store/Store"
import { ThemeProvider } from "./theme"

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
