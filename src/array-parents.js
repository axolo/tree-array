const arrayParents = (id, array = [], options, parents = []) => {
  options = { idKey: 'id', parentKey: 'parentId', ...options }
  const { idKey, parentKey } = options 
  const item = array.find(a => a[idKey] === id)
  if (!item?.[idKey]) return parents
  parents.unshift(item)
  return arrayParents(item[parentKey], array, options, parents)
}

module.exports = arrayParents