const util = require('util')
const array = require('./array.json')
const { arrayNode } = require('../src')

const parents = arrayNode(array, 'chartIndexActiveMy')

console.log('\narrayNode: ===> ' + parents.length)
console.log(util.inspect(parents, false, null, true))
