import { Surface, Headline, Switch } from "../components"
import { useStore } from "../store"

export const App = () => {
  const { themeMode, hideGithub } = useStore()
  return (
    <Surface>
      <Surface.Main>
        <Headline nowrap>Options</Headline>
        <Switch
          label="Light theme"
          checked={themeMode.get() === "light"}
          onChange={themeMode.toggle}
        />
        <Switch
          label="Hide github button"
          checked={hideGithub.get()}
          onChange={hideGithub.toggle}
        />
      </Surface.Main>
    </Surface>
  )
}
