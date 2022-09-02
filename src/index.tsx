/* @refresh reload */
import { render } from "solid-js/web"

import { App } from "./App"
import { StoreProvider } from "./store/Store"

render(
  () => (
    <StoreProvider>
      <App />
    </StoreProvider>
  ),
  document.getElementById("root") as HTMLElement
)
