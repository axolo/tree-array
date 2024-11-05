import config from './config'

const treeTrace = (tree, id, options, currentTrace = []) => {
  options = { ...config, ...options }
  const { idKey, childrenKey } = options

  for (const node of tree) {
    currentTrace.push({ ...node, [childrenKey]: null }) // 将当前节点加入路径
    if (node[idKey] === id) return currentTrace // 找到目标ID，返回路径
    if (node[childrenKey]) {
      const result = treeTrace(node[childrenKey], id, options, currentTrace) // 递归遍历子节点
      if (result) return result // 找到目标ID，返回路径
    }
    currentTrace.pop() // 回溯，将当前节点从路径中移除
  }
  return null // 遍历完所有节点，未找到目标ID，返回null
}

export default treeTrace
