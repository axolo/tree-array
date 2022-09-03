const tree2array = (tree, options) => {
  if (!tree?.length) return tree
  options = { childrenKey: 'children', ...options }
  const { childrenKey } = options
  return tree.flatMap(item => item[childrenKey] 
    ? [item, ...tree2array(item[childrenKey], options)] 
    : item)
}

module.exports = tree2array