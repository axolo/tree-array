const treeSub = (tree, id, options) => {
  options = { idKey: 'id', childrenKey: 'children', ...options }
  const { idKey, childrenKey } = options

  for (let i = 0; i < tree.length; i++) {
    if (tree[i][idKey] === id) {
      return tree[i]
    } else if (tree[i][childrenKey] && tree[i][childrenKey].length > 0) {
      const result = treeSub(tree[i][childrenKey], id, options)
      if (result) {
        return result
      }
    }
  }

  return null
}

export default treeSub
