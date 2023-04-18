const util = require('util')
const tree = require('./tree.json')
const { treeNode } = require('../src')

const resutl = treeNode(tree, 'chartProjectMyTwo')

console.log('\ntreeNode: ===> ' + util.inspect(resutl, false, null, true))
