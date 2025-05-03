console.dir(Math)

console.log(Math.PI)

console.log(Math.pow(2,3)) 
console.log(Math.pow(4,3)) 

let num = 123.556
console.log(Math.floor(num))

let num2 = 123.256
console.log(Math.ceil(num2))

let num3 = -200
console.log(Math.abs(num3))
console.log(Math.abs(200 - 500))

console.log(Math.min(1,2,3,4,5))
console.log(Math.min(1,2,3,4,-5))

console.log(Math.max(1,2,3,4,5))
console.log(Math.max(-1,-2,-3,-4,-5))

const ran = Math.random()
console.log(ran)
console.log(Math.random() * 10)

// 0 - 9
// 0.5343353 => 0
// 9.56656457 => 9
console.log(Math.floor(Math.random() * 10))

// 1 - 10 
// 0.2344343434 => 1 
// 9.2312414 => 10 
console.log(Math.ceil(Math.random() * 10))
