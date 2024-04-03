const tree2array = (tree, options, parentId = null) => {
  if (!Array.isArray(tree)) return tree

  options = {
    childrenKey: 'children',
    parentKey: 'parentId',
    leafKey: 'leaf',
    leafValue: true,
    ...options
  }
  const { childrenKey, parentKey, leafKey, leafValue } = options

  let result = []
  tree.forEach(node => {
    let newNode = { ...node, [parentKey]: parentId }
    if (node[childrenKey] && node[childrenKey].length > 0) {
      newNode[leafKey] = false
      delete newNode[childrenKey]
      result.push(newNode)
      result = result.concat(tree2array(node[childrenKey], options, node.id));
    } else {
      newNode[leafKey] = leafValue
      result.push(newNode)
    }
  })
  return result
}

export default tree2array
