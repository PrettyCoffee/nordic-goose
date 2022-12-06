import { createMemo } from "solid-js"

import { Surface, Headline, Switch, Slider } from "../components"
import { useStore } from "../store"
import { column, layout } from "./App.css"

export const App = () => {
  const { themeMode, hideGithub, maxWidth, duckMode, retroMode } = useStore()

  const isLightMode = createMemo(() => themeMode.get() === "light")
  const isPpuccinMode = createMemo(() => themeMode.get() === "gooseppuccin")

  return (
    <Surface maxWidth={maxWidth.get()}>
      <Surface.Main>
        <Headline nowrap>Options</Headline>
        <div class={layout}>
          <div class={column}>
            <Switch
              label="Light theme"
              checked={isLightMode()}
              onChange={() => themeMode.set(isLightMode() ? "dark" : "light")}
            />
            <Switch
              label={duckMode.get() ? "Duckppuccin" : "Gooseppuccin"}
              checked={isPpuccinMode()}
              onChange={() =>
                themeMode.set(isPpuccinMode() ? "dark" : "gooseppuccin")
              }
            />
            <Switch
              label="Hide github button"
              checked={hideGithub.get()}
              onChange={hideGithub.toggle}
            />
            <Switch
              label="Activate duck mode"
              checked={duckMode.get()}
              onChange={duckMode.toggle}
            />
            <Switch
              label={duckMode.get() ? "Retro duck" : "Retro goose"}
              checked={retroMode.get()}
              onChange={retroMode.toggle}
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
      <Surface.Image src={retroMode.url()} alt="" width="13rem" />
    </Surface>
  )
}
