// Pure Function (high reusable)
// 1 => same input , return same output
// 2 => not modify external global variables (no side effect)
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input, same output)


// Impure Function (low reusable bec depend external factors)
// 1 => modify external global variables (side effect)
// 2 => output depends on the external state
let total = 0;
function addToTotal(num) {
  total += num;
  return total;
}
console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (Different output for the same input)



// ====================================================================================================



// Immutable (primative type => string,number,boolean... can reasign) 
// 1 => cannot be changed original value 
// 2 => new value assign (eg. new array create)
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Creates a new array instead of modifying the original

console.log(arr); // [1, 2, 3]  (Unchanged)
console.log(newArr); // [1, 2, 3, 4]


// Mutable (reference type => array,obj)
// 1 => can be changed original value (without creating new)
const arr2 = [1, 2, 3];
arr2.push(4); // Mutates the original array

console.log(arr2); // [1, 2, 3, 4] (Original array modified)


// Primitives Are Immutable
let name = "Alice";
name[0] = "B";  // ❌ Does NOT change the string
console.log(name); // "Alice" (Still the same)

name = "Bob"; // ✅ The variable is reassigned (not mutated)
console.log(name); // "Bob"


// Objects & Arrays Are Mutable
const person = { name: "Alice", age: 25 };
person.age = 26; // ✅ Mutates the original object
console.log(person); // { name: "Alice", age: 26 }



// ====================================================================================================



// Procedural (imperative => step-by-step approach, loops and conditional statements to manipulate data) *How to do*
// 1 => use impure fn (modify external global state variables) side effects
// 2 => mutable (can be changed external original value)
let numbers = [1, 2, 3, 4, 5]; // Shared state

function doubleNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2; // Mutates the array
    }
}

doubleNumbers();
console.log(numbers); // [2, 4, 6, 8, 10] (Original array modified)


// Functional (declarative => What to do)
// 1 => use pure functions (no modify external global state variables) no side effects
// 2 => immutable (does not change existing data, creates new data)
// 3 => use higher-order functions (HOF) eg. map,filter...
const numbers2 = [1, 2, 3, 4, 5]; 

const doubledNumbers = numbers2.map(num => num * 2); // Does not modify original

console.log(numbers2);        // [1, 2, 3, 4, 5] (Unchanged)
console.log(doubledNumbers); // [2, 4, 6, 8, 10] (New array created)