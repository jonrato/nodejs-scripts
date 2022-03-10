const _ = require('lodash')

const a = [1,2,3,4,5]
const b = [1,3,6,8,9]

const diff = _.difference(a,b)

console.log(diff)