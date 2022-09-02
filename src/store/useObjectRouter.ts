import { Accessor, createEffect, createMemo, createSignal } from "solid-js"

export interface PathNode {
  id: string
  label: string
  nodes?: PathNode[]
}

const findNodeById = (nodes: PathNode[], id: string): PathNode | null =>
  nodes.reduce((result, node) => {
    if (result) return result
    if (node.id === id) return node
    if (node.nodes) return findNodeById(node.nodes, id)
    return null
  }, null as PathNode | null)

const getPathOfNode = (nodes: PathNode[], id: string): PathNode[] =>
  nodes.reduce((result, node) => {
    if (result.length) return result
    if (node.id === id) return [node]
    if (node.nodes) {
      const path = getPathOfNode(node.nodes, id)
      if (path.length) return [node, ...path]
    }
    return []
  }, [] as PathNode[])

interface ObjectRouterArgs {
  homeId: Accessor<string | null>
  nodes: Accessor<PathNode[]>
}

export interface ObjectRouterResult {
  value: () => PathNode | null
  get: () => PathNode[]
  set: (node: PathNode | null) => void
}

export const useObjectRouter = (args: ObjectRouterArgs): ObjectRouterResult => {
  const [current, setCurrent] = createSignal<PathNode | null>(null)

  createEffect(() => {
    const home = args.homeId() || "toolbar_____"
    setCurrent(findNodeById(args.nodes(), home))
  })

  const path = createMemo(() => {
    const node = current()
    return !node?.id ? [] : getPathOfNode(args.nodes(), node.id)
  })

  const set = (node: PathNode | null) => {
    setCurrent(() => node || { id: "root", label: "", nodes: args.nodes() })
  }

  return {
    value: current,
    get: path,
    set,
  }
}
