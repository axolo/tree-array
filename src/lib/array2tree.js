import config from './config'

const array2tree = (array, options) => {
  if (!Array.isArray(array)) return array
  options = { ...config, ...options }
  const { parentKey, idKey, childrenKey, leafKey, leafValue, deepKey, deepValue } = options
  const roots = array.filter(a => !a[parentKey] || !array.some(b => b[idKey] === a[parentKey]))

  const tree = (arr, deep = 0) => {
    return arr.map(c => {
      const children = array.filter(a => c[idKey] === a[parentKey])
      c[deepKey] = deep
      if (children.length) {
        // c[leafKey] = !leafValue
        c[childrenKey] = children
        tree(children, deep + 1)
      } else {
        c[leafKey] = leafValue
      }
      return c
    })
  }

  return tree(roots, deepValue)
}

export default array2tree
