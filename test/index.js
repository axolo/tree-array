const { tree2array, array2tree, arrayParents } = require('../src')
const tree = require('./tree.json')
const array = require('./array.json')

const treeArray = tree2array(tree)
console.log('\ntree2array :|================> ' + treeArray.length)
console.log(JSON.stringify(treeArray))

const arrayTree = array2tree(array)
console.log('\narray2tree :|================> ' + arrayTree.length)
console.log(JSON.stringify(arrayTree))

const parents = arrayParents('V1StGXR8', array)
console.log('\narrayParents :|================> ' + parents.length)
console.log(JSON.stringify(parents))
