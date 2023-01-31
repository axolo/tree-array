const util = require('util')
const tree = require('./tree.json')
const { tree2array } = require('../src')

const treeArray = tree2array(tree)

console.log('\ntree2array: ===> ' + treeArray.length)
console.log(util.inspect(treeArray, false, null, true))
