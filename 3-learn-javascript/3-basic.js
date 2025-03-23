// // Naming Convention 
// // let myName = "su su";
// // let myAge = 22;

// // class MySelf

// // name = my_name

// // let a = 5
// // let sum = a + 2

// // let      x    =     5;
// // let y = 10;
// // console.log(x);
// // console.log(y);
// // ================================================================================

// // Variable 
// // var x = 10;    (ES5 version)
// // let y = 15;    (ES6 version)
// // const z = 20;  (ES6 version)

// // var let => scope,hoist,redeclare
// // {
// //     var x = 5
// // }
// // console.log(x);

// // console.log(x);
// // var x = 5

// // let x = 5
// // let x = 10
// // console.log(x);

// // scope => let no | var yes
// // hoist => let no | var yes undefined 
// // redeclare => let no | var yes


// // let const => declare,reassign 
// let x = 5;
// x = 10;

// const y = 10;
// // y = 15 
// // console.log(y);

// // let myName = "su su";
// // let MyName = "aung aung"
// // console.log(myName);
// // console.log(MyName);

// // ================================================================================

// // String 
// let myName = "su su";
// let myName2 = 'mg mg';

// // I'm aung aung 
// let Name3 = "I'm aung aung";
// let Name4 = 'I\'m aung aung';
// // console.log(Name3);
// // console.log(Name4);

// // my laptop is 4" 
// let laptop = "my laptop is 4\""

// let height = `my height is 4'5"`

// let name = `my name is ${myName}`
// // console.log(name);

// // Array 
// const fruits = ["apple","orange","banana"];
// // console.log(fruits);
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]); 
// // console.log(fruits.length); 

// // overwrite
// fruits[0] = "aa"
// fruits[1] = "bb"
// // new index 
// fruits[3] = "cc"
// // console.log(fruits);

// const arr = []
// arr[0] = "aa"
// arr[1] = "bb"
// arr[2] = "cc"
// arr[10] = "zz"
// // console.log(arr);

// // Object 
// const student = {
//     name: "mg mg",
//     age: 20,
//     skills: ["html","css","js"]
// }
// console.log(student);
// // console.log(student.skills[0]);
// // console.log(student["skills"][0]);
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.skills);
// console.log(student.skills[0]);

// // console.log(student["name"]);
// // console.log(student["age"]);
// // console.log(student["skills"]);
// console.log(student["skills"][0]);

// student.name = "ma ma"
// console.log(student);
// student.aa = "aa"

// const obj = {}
// obj.aa = "aa"
// obj.bb = "bb"
// obj["cc"] = "cc"
// console.log(obj);

// // declare, assign 
// let gg = "aa"
// gg = 20
// console.log(gg);


// Practical Lessons 
let name = "mg mg"
let age = 15
let township = "kyauk myoung"

let pocketMoney = 200
let orangePrice = 50
// pocketMoney = pocketMoney - orangePrice
pocketMoney -= orangePrice
console.log(pocketMoney);

const bag = ["myanmar book", "english book", "bio book"]
let pen = false

let canMgMgFriSmoke = true
let canMgMgSmoke = false

const student3 = {
    name,
    age,
    township,
    canSmoke: canMgMgSmoke
}
console.log(student3);

const student1 = {
    name: "su su",
    age: 16,
    township: "hlaing",
    canSmoke: false
}

const student2 = {
    name: "kyaw kyaw",
    age: 15,
    township: "dagon",
    canSmoke: true
}

const students = [student1,student2,student3]
console.log(students);
console.log(students[0]);
console.log(students[0].name);
console.log(students[0]["name"]);

// console.log(typeof students);

// undefined | null 
let x = null
console.log(x);

console.log(bag[10]);