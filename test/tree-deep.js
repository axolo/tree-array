const tree = require('./tree.json')
const { treeDeep } = require('../src')

const deepTree = treeDeep(tree)

console.log('\ntreeDeep: ===> ' + deepTree)
