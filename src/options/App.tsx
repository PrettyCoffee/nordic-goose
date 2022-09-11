import { Surface, Headline, Switch, Slider } from "../components"
import { useStore } from "../store"
import { column, layout } from "./App.css"

export const App = () => {
  const { themeMode, hideGithub, maxWidth } = useStore()
  return (
    <Surface maxWidth={maxWidth.get()}>
      <Surface.Main>
        <Headline nowrap>Options</Headline>
        <div class={layout}>
          <div class={column}>
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
          </div>
          <div class={column}>
            <Slider
              label="Max surface width"
              onChange={maxWidth.set}
              value={maxWidth.get()}
              max={1400}
              min={700}
              step={50}
              getValueText={value => `Max width: ${value}px`}
            />
          </div>
        </div>
      </Surface.Main>
      <Surface.Image src="/assets/duck.gif" alt="" width="13rem" />
    </Surface>
  )
}
