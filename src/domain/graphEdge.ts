import { GraphEdgeType } from "../types";

class GraphEdge implements GraphEdgeType{
  edgeId: string;
  source: string;
  target: string;
  constructor({edgeId, source, target}: GraphEdgeType) {
    this.edgeId = edgeId;
    this.source = source;
    this.target = target;
  }
}

export {
  GraphEdge,
}
