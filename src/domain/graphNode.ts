import type { GraphNodeType } from '../types'

class GraphNode implements GraphNodeType {
  name: string
  nodeId: string
  version: string
  constructor({ name, nodeId, version }: GraphNodeType) {
    this.name = name
    this.nodeId = nodeId
    this.version = version
  }
}

export {
  GraphNode,
}
