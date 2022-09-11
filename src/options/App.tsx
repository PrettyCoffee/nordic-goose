import { createEffect } from "solid-js"

import { Surface, Headline } from "../components"
import { useStore } from "../store"

export const App = () => {
  const { themeMode } = useStore()

  createEffect(() => {
    document.body.classList.value = themeMode.class()
  })

  return (
    <Surface>
      <Surface.Main>
        <Headline nowrap>Options</Headline>
      </Surface.Main>
    </Surface>
  )
}
