import type { GraphEdgeType, GraphNodeType } from '../types';
declare function buildGraph(path: string, dept: number, devFlag: boolean): {
    NodeList: GraphNodeType[];
    EdgeList: GraphEdgeType[];
};
export default buildGraph;
