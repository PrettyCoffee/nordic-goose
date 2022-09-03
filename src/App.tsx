import { createEffect, createSignal } from "solid-js"

import { Bookmarks } from "./Bookmarks"
import { IconButton, Search, TextInput, Surface, Headline } from "./components"
import { Breadcrumb } from "./components/inputs/Breadcrumb"
import { search } from "./search"
import { useStore } from "./store"
import { useTheme } from "./theme"

export const App = () => {
  const theme = useTheme()
  const store = useStore()
  const [filter, setFilter] = createSignal("")

  const send = () => search(filter())

  createEffect(() => {
    document.body.classList.value = theme.themeClass()
  })

  return (
    <Surface>
      <Surface.Main>
        <Headline nowrap>Nordic goose</Headline>
        <TextInput onChange={setFilter} placeholder="Search bookmark" autofocus>
          <IconButton icon={Search} caption="Search bookmark" onClick={send} />
        </TextInput>
        <Breadcrumb
          path={store.path.get()}
          labelAccessor="label"
          onChange={store.path.set}
        />
        <div>
          <Bookmarks />
        </div>
      </Surface.Main>
      <Surface.Image src="assets/duck.gif" alt="" width="13rem" />
    </Surface>
  )
}
