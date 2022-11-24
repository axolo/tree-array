const tree2array = (tree, options) => {
  if (!Array.isArray(tree)) return tree
  const clone = JSON.parse(JSON.stringify(tree))
  options = { childrenKey: 'children', ...options }
  const { childrenKey } = options
  const array = clone.flatMap(item => item[childrenKey]
    ? [item, ...tree2array(item[childrenKey], options)]
    : item)
  array.forEach(a => delete a[childrenKey])
  return array
}

module.exports = tree2array
