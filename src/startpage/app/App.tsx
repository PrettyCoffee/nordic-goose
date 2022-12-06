import { createMemo, createSignal } from "solid-js"

import {
  Search,
  TextInput,
  Surface,
  Headline,
  Icon,
  Breadcrumb,
} from "../../components"
import { useStore } from "../../store"
import { Bookmarks } from "./Bookmarks"

export const App = () => {
  const { path, maxWidth, themeMode, duckMode, retroMode } = useStore()
  const [filter, setFilter] = createSignal("")

  const title = createMemo(() => {
    const duck = duckMode.get()
    const isCtp = themeMode.get() === "gooseppuccin"
    return duck
      ? isCtp
        ? "Duckppuccin"
        : "Nordic duck"
      : isCtp
      ? "Gooseppuccin"
      : "Nordic goose"
  })

  return (
    <Surface maxWidth={maxWidth.get()}>
      <Surface.Main>
        <Headline nowrap>{title()}</Headline>
        <TextInput onChange={setFilter} placeholder="Search bookmark" autofocus>
          <Icon icon={Search} size="md" />
        </TextInput>
        <Breadcrumb
          path={path.get()}
          labelAccessor="label"
          onChange={path.set}
        />
        <div>
          <Bookmarks filter={filter} />
        </div>
      </Surface.Main>
      <Surface.Image src={retroMode.url()} alt="" width="13rem" />
    </Surface>
  )
}
