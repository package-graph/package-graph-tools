import type {TreeDataType} from '../types'

class TreeData implements TreeDataType {
  treeId?: string
  name?: string
  version?: string
  children?: TreeDataType[]

  constructor({treeId, name, version, children}: TreeDataType) {
    this.treeId = treeId
    this.name = name
    this.version = version
    this.children = children
  }
}

export {
  TreeData,
}
