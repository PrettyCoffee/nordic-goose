import { createEffect, createSignal } from "solid-js"

import {
  Search,
  TextInput,
  Surface,
  Headline,
  Icon,
  Breadcrumb,
} from "../../components"
import { useStore } from "../../store"
import { useTheme } from "../../theme"
import { Bookmarks } from "./Bookmarks"

export const App = () => {
  const theme = useTheme()
  const store = useStore()
  const [filter, setFilter] = createSignal("")

  createEffect(() => {
    document.body.classList.value = theme.themeClass()
  })

  return (
    <Surface>
      <Surface.Main>
        <Headline nowrap>Nordic goose</Headline>
        <TextInput onChange={setFilter} placeholder="Search bookmark" autofocus>
          <Icon icon={Search} size="md" />
        </TextInput>
        <Breadcrumb
          path={store.path.get()}
          labelAccessor="label"
          onChange={store.path.set}
        />
        <div>
          <Bookmarks filter={filter} />
        </div>
      </Surface.Main>
      <Surface.Image src="/assets/duck.gif" alt="" width="13rem" />
    </Surface>
  )
}
