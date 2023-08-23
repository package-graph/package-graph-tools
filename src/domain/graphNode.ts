import type { GraphNodeType } from '../types'

class GraphNode implements GraphNodeType {
  name: string
  nodeId: string
  version: string
  depth: number
  constructor({ name, nodeId, version, depth }: GraphNodeType) {
    this.name = name
    this.nodeId = nodeId
    this.version = version
    this.depth = depth
  }
}

export {
  GraphNode,
}
