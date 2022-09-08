/* @refresh reload */
import { render } from "solid-js/web"
import { runtime } from "webextension-polyfill"

import { Breakpoint, IconButton, Github, Settings } from "../components"
import { StoreProvider } from "../store"
import { ThemeProvider } from "../theme"
import { App } from "./app/App"
import { duck, icons } from "./index.css"

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
        <span class={icons}>
          <IconButton
            icon={Settings}
            caption="Open settings"
            href={runtime.getURL("options/index.html")}
          />
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
