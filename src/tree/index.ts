import { TreeData } from '../domain'

function buildTree(json: object, dept: number) {
  // TODO 构建树版本
  const tree: TreeData = new TreeData({})
  console.log(tree)
  return tree
}

export default buildTree
