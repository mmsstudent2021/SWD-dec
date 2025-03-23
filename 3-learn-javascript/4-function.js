// Function Statement & Declaration 

// function run () {
//     console.log("*");
//     console.log("**");
//     console.log("***");
//     return "hello"
// }

// run()
// console.log(run());

// rest parameter 
function area (width,breadth,...aa) {
    // console.log(width);
    // console.log(breadth);
    console.log(aa);
    return width * breadth
}

// console.log(area(30,60));
// console.log(area(50,60));
// console.log(area());
// console.log(area(40,60));
console.log(area(50,60,5,6,7,8,9));

// // Function Statement & Declaration  
function run1 () {
   return "run1"
}
console.log(run1());


// // Function Expression 
const run2 = function () {
   return "run2"
}
console.log(run2());


// IIFE Function (function expression)()
(function () {
   console.log("run3");
})()

// Function Invoke Another Function 
function x () {
    return "i am x"
}

function y () {
    return x() + " i am y"
}

console.log(y());

// hoist => fn statement yes | fn expression no 
console.log(run());
function run () {
    return "run"
}

console.log(run());
const run = function () {
    return "run"
}

// scope => global, block, function (local)

// let x = 5
// console.log(x);

// {
//     console.log(x);
// }

// function run () {
//     console.log(x);
// }

// {
//     let x = 5
// }
// console.log(x);

function run () {
    let x = 5
}
console.log(x);
console.log(run());