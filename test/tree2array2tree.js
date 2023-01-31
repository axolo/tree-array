const util = require('util')
const tree = require('./tree.json')
const { tree2array, array2tree } = require('../src')

const treeArray = tree2array(tree)
const treeArrayTree = array2tree(treeArray)
console.log('\ntree2array -> array2tree: ===> ' + treeArrayTree.length)
console.log(util.inspect(treeArrayTree, false, null, true))
