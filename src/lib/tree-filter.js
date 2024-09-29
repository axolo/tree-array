import config from './config'

const filterTree = (tree, condition, options) => {
  options = { ...config, ...options }
  const { childrenKey } = options

  return tree.filter(node => {
    if (condition(node)) {
      if (node[childrenKey]) {
        const filteredChildren = filterTree(node[childrenKey], condition)
        if (filteredChildren.length > 0) {
          node[childrenKey] = filteredChildren
        } else {
          delete node[childrenKey]
        }
      }
      return true
    }
    return false
  })
}

export default filterTree
