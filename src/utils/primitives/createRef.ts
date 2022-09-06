import { createSignal } from "solid-js"

export const createRef = () => createSignal<HTMLElement | null>(null)
