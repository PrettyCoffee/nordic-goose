/* @refresh reload */
import { render } from "solid-js/web"

import { StoreProvider } from "../store"
import { App } from "./App"

render(
  () => (
    <StoreProvider>
      <App />
    </StoreProvider>
  ),
  document.getElementById("root") as HTMLElement
)
