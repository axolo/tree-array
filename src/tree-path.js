const treePath = (tree, targetId, options, currentPath = []) => {
  options = { idKey: 'id', childrenKey: 'children', ...options }
  const { idKey, childrenKey } = options

  for (let i = 0; i < tree.length; i++) {
    currentPath.push(i) // 将当前节点索引号加入路径
    if (tree[i][idKey] === targetId) return currentPath // 找到目标ID，返回路径
    if (tree[i][childrenKey]) {
      const result = treePath(tree[i][childrenKey], targetId, options, currentPath) // 递归遍历子节点
      if (result) return result // 找到目标ID，返回路径
    }
    currentPath.pop() // 回溯，将当前节点索引号从路径中移除
  }
  return null // 遍历完所有节点，未找到目标ID，返回null
}

module.exports = treePath
