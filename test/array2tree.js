const util = require('util')
const array = require('./array.json')
const { array2tree } = require('../src')

const arrayTree = array2tree(array)

console.log('\narray2tree: ===> ' + arrayTree.length)
console.log(util.inspect(arrayTree, false, null, true))
