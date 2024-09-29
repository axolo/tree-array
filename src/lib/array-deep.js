import config from './config'

const arrayDeep = (array, options, deep = 1) => {
  options = { ...config, ...options }
  const { idKey, parentKey } = options
  let temp = [...array]
  temp = array.filter(a => temp.some(b => b[parentKey] === a[idKey]))
  if (!temp.length) return deep
  deep++
  return arrayDeep(temp, options, deep)
}

export default arrayDeep
