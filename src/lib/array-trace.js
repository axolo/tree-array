const arrayTrace = (array, id, options, parents = []) => {
  options = { idKey: 'id', parentKey: 'parentId', ...options }
  const { idKey, parentKey } = options
  const item = array.find(a => a[idKey] === id)
  if (!item || !item[idKey]) return parents
  parents.unshift(item)
  return arrayTrace(array, item[parentKey], options, parents)
}

export default arrayTrace
