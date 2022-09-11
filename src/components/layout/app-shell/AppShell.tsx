import { createEffect, ParentProps, Show } from "solid-js"
import { runtime } from "webextension-polyfill"

import { StoreProvider, useStore } from "../../../store"
import { IconButton } from "../../inputs"
import { Github, Home, Settings } from "../../primitives"
import { icons } from "./AppShell.css"

export const IconBar = (props: AppShellProps) => {
  const { hideGithub } = useStore()
  return (
    <div class={icons}>
      <Show when={props.origin === "options"}>
        <IconButton
          icon={Home}
          caption="Back to startpage"
          href={runtime.getURL("startpage/startpage.html")}
        />
      </Show>
      <Show when={props.origin === "startpage"}>
        <IconButton
          icon={Settings}
          caption="Open settings"
          href={runtime.getURL("options/options.html")}
        />
      </Show>
      <Show when={!hideGithub.get()}>
        <IconButton
          icon={Github}
          caption="Source code"
          href="https://github.com/PrettyCoffee/nordic-goose"
        />
      </Show>
    </div>
  )
}

const App = (props: ParentProps) => {
  const { themeMode } = useStore()

  createEffect(() => {
    document.body.classList.value = themeMode.class()
  })

  return <>{props.children}</>
}

interface AppShellProps extends ParentProps {
  origin: "options" | "startpage"
}

export const AppShell = (props: AppShellProps) => (
  <StoreProvider>
    <App>{props.children}</App>
    <IconBar origin={props.origin} />
  </StoreProvider>
)
