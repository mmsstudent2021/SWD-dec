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

// [apple => 5, banana => 6]
  
const arr = fruits.map((el) => {
    // console.log(el);
    return `${el} => ${el.length}`
})
console.log(arr);
console.log(fruits);

const numArray = [1,2,3,4]

const newNumArray = numArray.map(num => {
    return num + 4
})

const newNumArray2 = numArray.map(num => {
    return num * 2
})

console.log(newNumArray);
console.log(newNumArray2);

console.log(numArray.map(num => num % 2 === 0 ? "even" : "odd"));

// for, for of, for in 
// console.log(fruits);
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(x of fruits){
//     console.log(x);
// }

// for(x in fruits){
//     console.log(fruits[x]);
// }

// console.dir(Array);

// i,index,arr 
// console.log(fruits.forEach((el,index,arr) => {
//     console.log(el);
//     // console.log(index);
//     // console.log(arr);
// }));

// const arr = fruits.forEach((el) => {
//     console.log(el);
//     return el
// })
// console.log(arr);

// console.log(fruits.map((el,index,arr) => {
//     console.log(el);
// }));

