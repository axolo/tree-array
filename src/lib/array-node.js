import config from './config'

const arrayNode = (array, id, options, parents = []) => {
  options = { ...config, ...options }
  const { idKey, parentKey } = options
  const item = array.find(a => a[idKey] === id)
  if (!item || !item[idKey]) return parents
  parents.unshift(item[idKey]) // only id
  return arrayNode(array, item[parentKey], options, parents)
}

export default arrayNode
