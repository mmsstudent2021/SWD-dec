console.dir(Number)

// static property, static method 
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// console.log("a" - 2)
// console.log(2 - 2)
// console.log("a" + 2)

console.log(Number.isNaN("a" - 2))
console.log(Number.isNaN(2 - 2))

const weight = "100lb"
console.log(Number.parseInt(weight))

const weight2 = "100.55lb"
console.log(Number.parseFloat(weight2))

// prototype method 
const num1 = 23.564
const number = Number(num1)
console.log(number)

console.log(number.toString())

console.log(number.toFixed())
console.log(number.toFixed(2))

const num2 = 23.564
console.log(num2.toString())
console.log(num2.toFixed(2))

// toPrecision() => original num a tine htote 
// toPrecision(2) => integer ka nay sa u tl 
// 0 ko sa ma twat buu 
let num = 5.123456;
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;
console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'


