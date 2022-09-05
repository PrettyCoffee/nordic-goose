/* @refresh reload */
import { render } from "solid-js/web"

import { App } from "./app/App"
import { Breakpoint, IconButton, Github } from "./components"
import { duck, github } from "./index.css"
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
        <span class={github}>
          <IconButton
            icon={Github}
            caption="Source code"
            href="https://github.com/PrettyCoffee/nordic-goose"
          />
        </span>
      </ThemeProvider>
    </StoreProvider>
  ),
  document.getElementById("root") as HTMLElement
)
