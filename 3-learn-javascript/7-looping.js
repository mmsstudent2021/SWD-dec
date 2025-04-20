// for , for of , for in 
// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// for(let i = 1; i <=5; i++){
//     // console.log(i);
//     console.log("*");
//     console.log("* *");
//     console.log("* * *");
// }

// for(
//     let i = (function () {
//         console.log("first Statement => i = 1");
//         return 1
//     })(); 
//     (function () {
//         let condition = i <= 10
//         console.log("second statement => i <= 10", condition);
//         return condition
//     })(); 
//     (function(){
//         console.log("third statement => i++");
//         return i++
//     })()){
//     console.log(i , "code block");
// }

// break = stop 
// continue = skip 

// for(let i = 1; i <=10; i++){
//     if(i == 8 || i == 2) continue;
//     console.log(i);
//     // if(i == 8) break;
// }

// for(let i = 1; i <=5; i++){
//     console.log(i)
// }


// for, for of, for in 
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Strawberry",
    "Pineapple",
    "Peach",
    "Cherry",
    "Watermelon"
  ];
  
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits.length)

// 0 < 10
// 1 < 10
// 10 <= 10

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// data tan htwat 
// for(fruit of fruits){
//     console.log(fruit)
// }

// index n.o htwat 
// for(x in fruits){
//     console.log(fruits[x])
// }

const person = {
    name: "mg mg",
    age: 15,
    gender: "male",
    township: "hlaing"
}

// console.log(person)
// person.name
// person["name"]

// string key htwat 
// for(x in person){
//     console.log(person[x])
// }

const people = [
    { name: "Alice", age: 28, gender: "Female", township: "Downtown" },
    { name: "Bob", age: 34, gender: "Male", township: "Riverside" },
    { name: "Clara", age: 22, gender: "Female", township: "Hilltop" },
    { name: "David", age: 40, gender: "Male", township: "Lakeside" },
    { name: "Eva", age: 30, gender: "Female", township: "Greenville" }
  ];

//   console.log(people)
// for(obj of people){
//     // console.log(obj)
//     for(x in obj){
//         console.log(obj[x])
//     }
//     console.log("=============")
// }


// while, do while 
// let count = 1
// while(count <= 5){
//   console.log(count)
//   count++
// }

// do{
//   console.log(count)
//   count++
// }while(count <= 5)

// typeof 
// console.log(typeof "")
// console.log(typeof 9)
// console.log(typeof {})
// console.log(typeof [])

// truthy falsy 
// false 
console.log(false ? "true" : "false")
console.log(0 ? "true" : "false")
console.log("" ? "true" : "false")
console.log('' ? "true" : "false")
console.log(null ? "true" : "false")
console.log(undefined ? "true" : "false")
console.log(NaN ? "true" : "false")