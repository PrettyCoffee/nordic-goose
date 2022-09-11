/* @refresh reload */
import { render } from "solid-js/web"

import { AppShell } from "../components"
import { Options } from "./Options"

render(
  () => (
    <AppShell origin="options">
      <Options />
    </AppShell>
  ),
  document.getElementById("root") as HTMLElement
)
