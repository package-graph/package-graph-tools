/**
 * @file GraphInterface.ts
 * @description 定义接口
 * @date 2023/08/03
 * @author juanxincai
 * @version 0.0.1
 * @since 0.0.1
 * @see {@link}
 */

interface GraphNodeType {
  nodeId: string
  name: string
  version: string
}

interface GraphEdgeType {
  edgeId: string
  source: GraphNodeType
  target: GraphNodeType
}

export type {
  GraphNodeType,
  GraphEdgeType,
}
