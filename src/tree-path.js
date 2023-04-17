const treePath = (tree, id, options) => {
  options = {
    idKey: 'id',
    parentKey: 'parentId',
    childrenKey: 'children',
    ...options
  }
  const ancestorIndexes = []
  let node = findNode(tree, id, options)
  while (node) {
    const parent = findNode(tree, node[options.parentKey], options)
    if (parent) {
      const index = parent[options.childrenKey].findIndex(child => child[options.idKey] === node[options.idKey])
      ancestorIndexes.unshift(index)
    }
    node = parent
  }
  return ancestorIndexes
}

const findNode = (tree, id, options) => {
  for (let node of tree) {
    if (node[options.idKey] === id) {
      return node
    } else if (node[options.childrenKey]) {
      const childNode = findNode(node[options.childrenKey], id, options)
      if (childNode) {
        return childNode
      }
    }
  }
  return null
}

module.exports = treePath
