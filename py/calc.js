
// 41*x-31*x^2+74252906=0

var big = require('./big')

// (1234567^12345678901234567890)%999999997=

// var fs = require('fs')

// let x = 2

// let arr = '---\n'

// while (x < 10000) {
//   const res =  new big(1234567).pow(x).mod(999999997).toString()
//   arr += res + '\n'
//   console.log(x)
//   x++
// }

// fs.writeFileSync('./test.txt', arr)


// console.log(x)

console.log(
  new big(1234567).pow(2).mod(999999997).toString()
)