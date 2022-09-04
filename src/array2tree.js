const array2tree = (array, options) => {
  const clone = JSON.parse(JSON.stringify(array))

  options = {
    idKey: 'id',
    parentKey: 'parentId',
    childrenKey: 'children',
    leafKey: 'leaf',
    leafValue: true,
    ...options
  }
  const { parentKey, idKey, childrenKey, leafKey, leafValue } = options

  const roots = clone.filter(a => !a[parentKey] || !clone.some(b => b[idKey] === a[parentKey]))

  const tree = arr => {
    return arr.map(c => {
      const children = clone.filter(a => c[idKey] === a[parentKey])
      if (children.length) {
        c[childrenKey] = children
        tree(children)
      } else {
        c[leafKey] = leafValue
      }
      return c
    })
  }

  return tree(roots)
}

module.exports = array2tree
