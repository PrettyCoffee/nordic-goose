import { createSignal } from "solid-js"

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
  const { path } = useStore()
  const [filter, setFilter] = createSignal("")

  return (
    <Surface>
      <Surface.Main>
        <Headline nowrap>Nordic goose</Headline>
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
      <Surface.Image src="/assets/duck.gif" alt="" width="13rem" />
    </Surface>
  )
}
