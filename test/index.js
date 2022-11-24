const util = require('util')

const { tree2array, array2tree, arrayParents } = require('../src')
const tree = require('./tree.json')
const array = require('./array.json')

const treeArray = tree2array(tree)
console.log('\ntree2array: ===> ' + treeArray.length)
console.log(util.inspect(treeArray, false, null, true))

const arrayTree = array2tree(array)
console.log('\narray2tree: ===> ' + arrayTree.length)
console.log(util.inspect(arrayTree, false, null, true))

const treeArrayTree = array2tree(treeArray)
console.log('\narray2tree -> tree2array: ===> ' + treeArrayTree.length)
console.log(util.inspect(treeArrayTree, false, null, true))

const parents = arrayParents('V1StGXR8', array)
console.log('\narrayParents: ===> ' + parents.length)
console.log(util.inspect(parents, false, null, true))
