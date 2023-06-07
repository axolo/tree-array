const arrayNode = (array, id, options, parents = []) => {
  options = { idKey: 'id', parentKey: 'parentId', ...options }
  const { idKey, parentKey } = options
  const item = array.find(a => a[idKey] === id)
  if (!item || !item[idKey]) return parents
  parents.unshift(item[idKey]) // only id
  return arrayNode(array, item[parentKey], options, parents)
}

module.exports = arrayNode
