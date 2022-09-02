import { createSignal } from "solid-js"

import { Bookmarks } from "./Bookmarks"
import { IconButton, Search, TextInput } from "./components"
import { search } from "./search"
import "./styles.css"

export const App = () => {
  const [value, setValue] = createSignal("")

  const send = () => search(value())

  return (
    <div class="surface">
      <main>
        <h1>Nordic goose</h1>
        <TextInput
          onChange={setValue}
          onKeyDown={key => key === "Enter" && send()}
          placeholder="Search the web"
          autofocus
        >
          <IconButton icon={Search} caption="Search" onClick={send} />
        </TextInput>

        <Bookmarks />
      </main>
      <img src="assets/duck.gif" alt="" />
    </div>
  )
}
