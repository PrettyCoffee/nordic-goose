/* @refresh reload */
import { render } from "solid-js/web"

import { AppShell } from "../components"
import { App } from "./App"

render(
  () => (
    <AppShell origin="options">
      <App />
    </AppShell>
  ),
  document.getElementById("root") as HTMLElement
)
