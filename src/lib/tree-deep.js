import config from './config'

const treeDeep = (tree, options, deep = 1) => {
  options = { ...config, ...options }
  const { childrenKey } = options
  let has = false
  let temp = []
  for (let i = 0; i < tree.length; i++) {
    if (Array.isArray(tree[i][childrenKey])) {
      for (let j = 0; j < tree[i][childrenKey].length; j++) {
        temp.push(tree[i][childrenKey][j])
      }
      has = true
    }
  }
  if (!has) return deep
  deep++
  return treeDeep(temp, options, deep)
}

export default treeDeep
