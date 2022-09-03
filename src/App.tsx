import { createEffect, createSignal, For } from "solid-js"

import { Bookmarks } from "./Bookmarks"
import { IconButton, Search, TextInput } from "./components"
import { search } from "./search"
import { useStore } from "./store"
import { useTheme } from "./theme"

import "./styles.css"

export const App = () => {
  const theme = useTheme()
  const store = useStore()
  const [value, setValue] = createSignal("")

  const send = () => search(value())

  createEffect(() => {
    document.body.classList.value = theme.themeClass()
  })

  return (
    <div class={"surface"}>
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
        <div style={{ margin: "auto 0" }}>
          <button
            onClick={() => store.path.set(null)}
            style={{ background: "transparent", border: "none" }}
          >
            ~
          </button>
          <For each={store.path.get()}>
            {item => (
              <button
                onClick={() => store.path.set(item)}
                style={{ background: "transparent", border: "none" }}
              >
                /{item.label}
              </button>
            )}
          </For>
        </div>
        <Bookmarks />
      </main>
      <img src="assets/duck.gif" alt="" />
    </div>
  )
}
