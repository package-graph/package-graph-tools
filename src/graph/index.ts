/* eslint-disable no-console */
import fs from 'node:fs'
import * as process from 'node:process'
import type { GraphEdgeType, GraphNodeType } from '../types'

function buildGraph(
  path: string,
  dept: number,
  devFlag: boolean,
) {
  const NodeList: GraphNodeType[] = []
  const EdgeList: GraphEdgeType[] = []
  const NodeMap: Map<string, string> = new Map()
  const dep = 0
  const graphBuild = (path: string, depth: number) => {
    const packageJSONPath = `${path}/package.json`
    let json: any
    try {
      json = fs.readFileSync(packageJSONPath)
    }
    catch (e) {
      console.log(e)
    }
    const root = JSON.parse(json)
    if (NodeMap.get(root.name)) {
      if (NodeMap.get(root.name) !== root.version) {
        // TODO 多版本问题
      }
      else {
        // TODO 环形依赖
      }
      return
    }
    NodeMap.set(root.name, root.version)
    NodeList.push({
      depth,
      name: root.name,
      nodeId: root.name,
      version: root.version,
    })
    if (depth + 1 >= dept)
      return
    const dependencies = devFlag
      ? {
          ...root.dependencies,
          ...root.devDependencies,
        }
      : root.dependencies
    if (dependencies == null)
      return
    Object.keys(dependencies).forEach((key) => {
      EdgeList.push({
        edgeId: `${root.name}-${key}`,
        source: {
          name: root.name,
          nodeId: root.name,
          version: root.version,
          depth,
        },
        target: {
          name: key,
          nodeId: key,
          version: dependencies[key],
          depth: depth + 1,
        },
      })
      graphBuild(`${process.cwd()}/node_modules/${key}`, depth + 1)
    })
  }
  graphBuild(path, dep)

  return {
    NodeList,
    EdgeList,
  }
}

export default buildGraph
