import config from './config'

const treeNode = (tree, id, options, currentNode = []) => {
  options = { ...config, ...options }
  const { idKey, childrenKey } = options

  for (let node of tree) {
    currentNode.push(node[idKey]) // 将当前节点ID加入路径
    if (node[idKey] === id) return currentNode // 找到目标ID，返回路径
    if (node[childrenKey]) {
      const result = treeNode(node[childrenKey], id, options, currentNode) // 递归遍历子节点
      if (result) return result // 找到目标ID，返回路径
    }
    currentNode.pop() // 回溯，将当前节点ID从路径中移除
  }
  return null // 遍历完所有节点，未找到目标ID，返回null
}

export default treeNode
