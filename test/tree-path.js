const util = require('util')
const tree = require('./tree.json')
const { treePath } = require('../src')

const pathTree = treePath(tree, 'chartProjectMyTwo')

console.log('\ntreePath: ===> ' + util.inspect(pathTree, false, null, true))
