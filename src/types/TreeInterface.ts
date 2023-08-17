/**
 * @file GraphInterface.ts
 * @description 定义接口
 * @date 2023/08/03
 * @author juanxincai
 * @version 0.0.1
 * @since 0.0.1
 * @see {@link}
 */

/**
 * @interface TreeDataType
 * @description 树的数据类型
 * @property {string} id - id
 * @property {string} name - 名称
 * @property {string} version - 版本
 * @property {TreeDataType[]} children - 子节点
 */
interface TreeDataType {
  treeId?: string;
  name?: string;
  version?: string;
  // parent?: TreeDataType;
  // 是否循环依赖 Circular dependencies
  children?: TreeDataType[];
}

export type {
  TreeDataType,
}
