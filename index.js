const tree2array = (tree, options) => {
  if (!tree?.length) return tree
  const { childrenKey } = { ...options, childrenKey: 'children', ...options }
  return tree.flatMap(item => item[childrenKey] ? [item, ...tree2array(item[childrenKey])] : item)
}

const array2tree = (array, options) => {
  return array
}

module.exports = { tree2array, array2tree }