import config from './config'

const treeNode = (tree, targetId, options, currentPath = []) => {
  options = { ...config, ...options }
  const { idKey, childrenKey } = options

  for (let node of tree) {
    currentPath.push(node[idKey]) // 将当前节点ID加入路径
    if (node[idKey] === targetId) return currentPath // 找到目标ID，返回路径
    if (node[childrenKey]) {
      const result = treeNode(node[childrenKey], targetId, options, currentPath) // 递归遍历子节点
      if (result) return result // 找到目标ID，返回路径
    }
    currentPath.pop() // 回溯，将当前节点ID从路径中移除
  }
  return null // 遍历完所有节点，未找到目标ID，返回null
}

export default treeNode
