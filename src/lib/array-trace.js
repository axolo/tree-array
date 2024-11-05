import config from './config'

const arrayTrace = (array, id, options, parents = []) => {
  options = { ...config, ...options }
  const { idKey, parentKey } = options
  const item = array.find(a => a[idKey] === id)
  if (!item?.[idKey]) return parents
  parents.unshift(item)
  return arrayTrace(array, item[parentKey], options, parents)
}

export default arrayTrace
