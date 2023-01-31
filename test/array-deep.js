const array = require('./array.json')
const { arrayDeep } = require('../src')

const deepArray = arrayDeep(array)

console.log('\narrayDeep: ===> ' + deepArray)

