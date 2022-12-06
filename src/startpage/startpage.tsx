/* @refresh reload */
import { render } from "solid-js/web"

import { Breakpoint, AppShell } from "../components"
import { useStore } from "../store"
import { App } from "./app/App"
import { duck } from "./startpage.css"

const Mobile = () => {
  const { retroMode } = useStore()
  return <img class={duck} src={retroMode.url()} alt="" />
}

render(() => {
  return (
    <AppShell origin="startpage">
      <Breakpoint desktop laptop tablet>
        <App />
      </Breakpoint>
      <Breakpoint mobile>
        <Mobile />
      </Breakpoint>
    </AppShell>
  )
}, document.getElementById("root") as HTMLElement)
