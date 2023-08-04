// @ts-ignore
import fs from "fs"
import {GraphEdgeType, GraphNodeType} from "../types";
import * as process from "process";
const buildGraph = (path:string, dept:number, devFlag:boolean) => {
  const NodeList:GraphNodeType[] = [];
  const EdgeList:GraphEdgeType[] = [];
  const NodeMap:Map<string, string> = new Map();
  let dep = 0;
  const graphBuild = (path:string, depth:number) => {
    if(depth >= dept) {
      return;
    }
    const packageJSONPath = `${path}/package.json`
    let json:any;
    try {
      json = fs.readFileSync(packageJSONPath);
    }
    catch (e) {
      console.log(e);
    }
    let root = JSON.parse(json);
    if(NodeMap.get(root.name)) {
      // TODO 多版本问题&&环形依赖
      return;
    }
    NodeMap.set(root.name, root.version);
    NodeList.push({
      name: root.name,
      nodeId: root.name,
      version: root.version,
    });
    let dependencies = devFlag ? {
      ...root.dependencies,
      ...root.devDependencies,
    } : root.dependencies;
    if(dependencies == null) return;
    Object.keys(dependencies).forEach((key) => {
      EdgeList.push({
        edgeId: `${root.name}-${key}`,
        source:{
          name: root.name,
          nodeId: root.name,
          version: root.version,
        },
        target: {
          name: key,
          nodeId: key,
          version: dependencies[key],
        },
      });
      graphBuild(`${process.cwd()}/node_modules/${key}`, depth + 1);
    });
  }
  graphBuild(path, dep);
  return {
    NodeList,
    EdgeList,
  }
}

export default buildGraph
