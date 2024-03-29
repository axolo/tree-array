import cloneDeep from 'lodash.clonedeep'

const tree2array = (tree, options) => {
  if (!Array.isArray(tree)) return tree

  options = { childrenKey: 'children', ...options }
  const { childrenKey } = options
  const clone = cloneDeep(tree)

  const array = clone.flatMap(item => item[childrenKey]
    ? [item, ...tree2array(item[childrenKey], options)]
    : item)
  array.forEach(a => delete a[childrenKey])

  return array
}

export default tree2array
