import { TreeData } from '../domain'
import fs from 'node:fs'
import { TreeDataType } from '../types'

function buildTree(rootPath: string, dept: number, devFlag: boolean) {
  // TODO 构建树版本
  const rootTree: TreeData = new TreeData({})
  const diffTree =async (tree: TreeDataType, path: string, depth: number) => {
    if (depth >= dept)
      return
    const packageJSONPath = `${path}/package.json`
    let json: any
    try {
      json = fs.readFileSync(packageJSONPath)
    }
    catch (e) {
      console.log(e)
    }
    // 当前package
    let root = JSON.parse(json);
    tree.treeId = root.name+':'+root.version
    tree.name = root.name
    tree.version = root.version

    const dependencies = devFlag
      ? {
          ...root.dependencies,
          ...root.devDependencies,
        }
      : root.dependencies
    if (dependencies == null)
      return
    Object.keys(dependencies).forEach((key: string) => {
      const treeNode = new TreeData({})
      diffTree(treeNode, `${path}/${key}`, dept + 1)
      tree.children?.push(treeNode)
    })
  }
  return rootTree
}

export default buildTree
