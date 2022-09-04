/* @refresh reload */
import { render } from "solid-js/web"

import { App } from "./app/App"
import { Breakpoint } from "./components"
import { duck } from "./duck.css"
import { StoreProvider } from "./store/Store"
import { ThemeProvider } from "./theme"

render(
  () => (
    <StoreProvider>
      <ThemeProvider>
        <Breakpoint desktop laptop tablet>
          <App />
        </Breakpoint>
        <Breakpoint mobile>
          <img class={duck} src="assets/duck.gif" alt="" />
        </Breakpoint>
      </ThemeProvider>
    </StoreProvider>
  ),
  document.getElementById("root") as HTMLElement
)
