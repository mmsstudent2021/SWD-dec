console.dir(String)

const str = new String("        San Kyi tar par           ")
// console.log(str)
// console.log(str[0])
// console.log(str[1])
// console.log(str.length)

// prototype method 
// case 
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// substring, slice => (startIndex, lastIndex )
console.log(str.substring(0,2))
console.log(str.substring(0,3))
console.log(str.substring(4,7))

console.log(str.slice(0,2))
console.log(str.slice(0,3))
console.log(str.slice(4,7))

// trim => ma lo tae space twy phyat htote 
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

// padStart => (totalStringLength, fill)
const num = "123"
console.log(num.padStart(5,"aa"))
console.log(num.padEnd(5,"HI"))
console.log(num.padEnd(10,0))

// search => shi yin index n.o | ma shi yin -1 
const str2 = new String("san kyi tar par")
console.log(str2)
console.log(str2.search("san"))
console.log(str2.search("kyi"))
console.log(str2.search("apple"))

// replace => (search,replace)
console.log(str2.replace("kyi","pya"))
console.log(str2.replaceAll("a","z"))

// split => string to array 
console.log(str2.split())
console.log(str2.split(""))
console.log(str2.split(" "))
console.log(str2.split("a"))