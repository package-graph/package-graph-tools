import { TreeData } from '../domain'

function buildTree(json: object, dept: number) {
  // TODO 构建树版本
  const tree: TreeData = new TreeData({})
  // eslint-disable-next-line no-console
  console.log(tree, json, dept)
  return tree
}

export default buildTree