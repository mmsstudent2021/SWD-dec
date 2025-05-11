console.dir(Object)

const obj = {
    a:"aa",
    b:"bb",
    c:"cc",
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(Object.hasOwn(obj,"a"))
console.log(Object.hasOwn(obj,"name"))