import { createEffect } from "solid-js"

import { Surface, Headline } from "../components"
import { useTheme } from "../theme"

export const App = () => {
  const theme = useTheme()

  createEffect(() => {
    document.body.classList.value = theme.themeClass()
  })

  return (
    <Surface>
      <Surface.Main>
        <Headline nowrap>Options</Headline>
      </Surface.Main>
    </Surface>
  )
}
