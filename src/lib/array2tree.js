import cloneDeep from 'lodash.clonedeep'

const array2tree = (array, options) => {
  if (!Array.isArray(array)) return array

  options = {
    idKey: 'id',
    parentKey: 'parentId',
    childrenKey: 'children',
    leafKey: 'leaf',
    leafValue: true,
    deepKey: 'deep',
    deepValue: 0,
    ...options
  }

  const { parentKey, idKey, childrenKey, leafKey, leafValue, deepKey, deepValue } = options
  const clone = cloneDeep(array)
  const roots = clone.filter(a => !a[parentKey] || !clone.some(b => b[idKey] === a[parentKey]))

  const tree = (arr, deep = 0) => {
    return arr.map(c => {
      const children = clone.filter(a => c[idKey] === a[parentKey])
      c[deepKey] = deep
      if (children.length) {
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
