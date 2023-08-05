import type {GraphEdgeType, GraphNodeType} from '../types'

class GraphEdge implements GraphEdgeType {
  edgeId: string
  source: GraphNodeType
  target: GraphNodeType

  constructor({edgeId, source, target}: GraphEdgeType) {
    this.edgeId = edgeId
    this.source = source
    this.target = target
  }
}

export {
  GraphEdge,
}
