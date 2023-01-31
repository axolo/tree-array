const util = require('util')
const array = require('./array.json')
const { arrayParents } = require('../src')

const parents = arrayParents('chartIndexActiveMy', array)

console.log('\narrayParents: ===> ' + parents.length)
console.log(util.inspect(parents, false, null, true))
