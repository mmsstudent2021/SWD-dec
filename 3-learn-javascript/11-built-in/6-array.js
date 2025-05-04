const fruits = [
    "apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Peach",
    "Kiwi"
  ];

console.dir(Array);
console.log(fruits);
console.log(fruits.length);

// array to string 
console.log(fruits.toString());

// array to string join("--")
console.log(fruits.join());
console.log(fruits.join("--"));
console.log(fruits.join("/"));

// sort => A to Z a to z (original array change)
console.log(fruits);
console.log(fruits.sort());
console.log(fruits);

// reverse => last index to first index (original array change)
const arr = ["one","two","three"]
console.log(arr);
console.log(arr.reverse());
console.log(arr);

// push, pop, unshift, shift => (original array change)
fruits.push("aa")
fruits.push("bb")
fruits.push("cc")

fruits.pop()
fruits.pop()
fruits.pop()
fruits.pop()

fruits.unshift("aa")
fruits.unshift("bb")
fruits.unshift("cc")

fruits.shift()
fruits.shift()
fruits.shift()
console.log(fruits);

console.dir(Array);
// isArray => true , false 
console.log(Array.isArray([]));
console.log(Array.isArray("hello"));
console.log(Array.isArray(fruits));

// includes => true, false 
console.log(fruits.includes("apple"));
console.log(fruits.includes("Apple"));
console.log(fruits.includes("aa"));

// indexOf => index n.o | ma shi yin -1 pyan
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("aa"));

// console.log(fruits);

// slice => startIndex, lastIndex  (no effect to original array)
console.log(fruits.slice(0,3));
console.log(fruits.slice(3,6));
console.log(fruits);

// splice => startIndex, length (original array change)
console.log(fruits.splice(1,2));
console.log(fruits);

// sort, reverse, push, pop, unshift, shift, splice => original array change
// slice => no effect to original array

// concat 
const arr1 = ["aa","bb","cc"]
const arr2 = [1,2,3]
const arr3 = ["xx","yy","zz"]

// const finalArray = [arr1,arr2,arr3]
const finalArray2 = arr1.concat(arr2).concat(arr3).concat(arr2)
// console.log(finalArray);
console.log(finalArray2);

// spread 
const finalArray3 = [...arr1,...arr2,...arr3]
console.log(finalArray3);

const obj1 = {
    a:"aa",
    b:"bb",
    c:"cc",
}

const obj2 = {
    x:"xx",
    y:"yy",
    z:"zz",
}

const finalObj = {...obj1,...obj2}
console.log(finalObj);