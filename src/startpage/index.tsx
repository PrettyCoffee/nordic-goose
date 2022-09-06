/* @refresh reload */
import { render } from "solid-js/web"

import { Breakpoint, IconButton, Github } from "../components"
import { ThemeProvider } from "../theme"
import { App } from "./app/App"
import { duck, github } from "./index.css"
import { StoreProvider } from "./store/Store"

render(
  () => (
    <StoreProvider>
      <ThemeProvider>
        <Breakpoint desktop laptop tablet>
          <App />
        </Breakpoint>
        <Breakpoint mobile>
          <img class={duck} src="/assets/duck.gif" alt="" />
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
