/* @refresh reload */
import { render } from "solid-js/web"

import { Breakpoint, AppShell } from "../components"
import { App } from "./app/App"
import { duck } from "./startpage.css"

render(
  () => (
    <AppShell origin="startpage">
      <Breakpoint desktop laptop tablet>
        <App />
      </Breakpoint>
      <Breakpoint mobile>
        <img class={duck} src="/assets/duck.gif" alt="" />
      </Breakpoint>
    </AppShell>
  ),
  document.getElementById("root") as HTMLElement
)
