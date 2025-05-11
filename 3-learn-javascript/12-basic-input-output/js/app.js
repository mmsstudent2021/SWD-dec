// window => browser ta khu lone
// document => web page ta khu lone
// console => console ta khu lone

console.log(window);
console.log(document);
console.log(console);

console.log("hello");
console.clear()

// const x = 2
// const y = 3
// const result = x + y
// console.log(result);


// window
// prompt => browser ka nay input u pay 
const x = window.prompt("first number")
const y = window.prompt("second number")
const result = parseFloat(x) + parseFloat(y)

// alert => browser ka nay alert nat data htote pya
window.alert(result)

// confirm => boolean pyan 
const result2 = window.confirm("ser pp lr")
console.log(result2 ? "ser pp" : "ma ser ya ty buu");