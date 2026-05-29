import config from './config.js'

const array2tree = (array, options) => {
  if (!Array.isArray(array)) return array
  options = { ...config, ...options }
  const { parentKey, idKey, childrenKey, leafKey, leafValue, deepKey, deepValue } = options
  const roots = array.filter(a => !a[parentKey] || !array.some(b => b[idKey] === a[parentKey]))

  const tree = (arr, deep = 0, visited = new Set()) => {
    return arr.map(c => {
      const cId = c[idKey]
      if (visited.has(cId)) {
        c[leafKey] = leafValue
        return c
      }
      visited.add(cId)
      const children = array.filter(a => cId === a[parentKey])
      c[deepKey] = deep
      if (children.length) {
        c[childrenKey] = tree(children, deep + 1, visited)
      } else {
        c[leafKey] = leafValue
      }
      return c
    })
  }

  return tree(roots, deepValue)
}

export default array2tree
