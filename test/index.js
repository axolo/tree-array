const { tree2array, array2tree, arrayParents } = require('../src')
const tree = require('./tree.json')
const array = require('./array.json')

const treeArray = tree2array(tree)
console.log('tree2array => ' + treeArray.length, treeArray)

const arrayTree = array2tree(array)
console.log('array2tree => ' + arrayTree.length, arrayTree)

const parents = arrayParents('R5S4lIp7GLDv', array)
console.log('arrayParents => ', parents)