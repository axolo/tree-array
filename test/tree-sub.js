const util = require('util')
const tree = require('./tree.json')
const { treeSub } = require('../src')

const result = treeSub(tree, 'chartIndex')

console.log('\ntreeSub: ===> ' + util.inspect(result, false, null, true))
