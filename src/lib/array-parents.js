import config from './config'

const arrayParents = (id, array = [], options, parents = []) => {
  options = { ...config, ...options }
  const { idKey, parentKey } = options
  const item = array.find(a => a[idKey] === id)
  if (!item || !item[idKey]) return parents
  parents.unshift(item)
  return arrayParents(item[parentKey], array, options, parents)
}

export default arrayParents
