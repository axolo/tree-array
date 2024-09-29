import config from './config'
import randomId from "./random-id"

const tree2array = (tree, options, parentId = null) => {
  if (!Array.isArray(tree)) return tree
  options = { ...config, ...options }
  const { idKey, childrenKey, parentKey, leafKey, leafValue } = options

  let result = []
  tree.forEach(node => {
    const id = node[idKey] || randomId()
    let newNode = { ...node, [parentKey]: parentId, [idKey]: id }
    if (node[childrenKey] && node[childrenKey].length > 0) {
      newNode[leafKey] = false
      delete newNode[childrenKey]
      result.push(newNode)
      result = result.concat(tree2array(node[childrenKey], options, id));
    } else {
      newNode[leafKey] = leafValue
      result.push(newNode)
    }
  })
  return result
}

export default tree2array
