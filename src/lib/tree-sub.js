import config from './config'

const treeSub = (tree, id, options) => {
  options = { ...config, ...options }
  const { idKey, childrenKey } = options

  for (const node of tree) {
    if (node[idKey] === id) {
      return node
    } else if (node[childrenKey] && node[childrenKey].length > 0) {
      const result = treeSub(node[childrenKey], id, options)
      if (result) {
        return result
      }
    }
  }

  return null
}

export default treeSub
