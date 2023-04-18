const util = require('util')
const tree = require('./tree.json')
const { treePath } = require('../src')

const reslut = treePath(tree, 'chartProjectMyTwo')

console.log('\ntreePath: ===> ' + util.inspect(reslut, false, null, true))
