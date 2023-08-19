/* eslint-disable no-console */
import { TreeData } from '../domain'

function buildTree(path: string, dept: number, devFlag: boolean) {
  // TODO 构建树版本
  const tree: TreeData = new TreeData({})
  console.log(devFlag)
  console.log(tree, path, dept)
  return tree
}

export default buildTree
