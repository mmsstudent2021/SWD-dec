// DOM (document object modal )
// html => css
// html css => js

// select element 
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("input"));
// console.log(document.getElementsByTagName("button"));

const heading = document.getElementById("heading")
const input = document.getElementById("textInput")
const btn = document.getElementById("btn")
const listGroup = document.getElementById("listGroup")
// console.dir(heading);
// console.dir(input);
console.dir(btn);

// get innerText 
console.log(heading.innerText);
console.log(heading.innerHTML);

console.log(btn.innerText);
console.log(btn.innerHTML);

console.log(listGroup.innerText);
console.log(listGroup.innerHTML);

// type => text 
console.log(input.value);

// type => number 
console.log(input.valueAsNumber);

// type => date 
console.log(input.valueAsDate);

// type => file 
console.log(input.files);

// set text 
// const obj = {
//     a: "aa",
//     b: "bb"
// }

// obj.a = "zz"
// console.log(obj.a);

heading.innerText = "san kyi tr par"
input.value = "hello"

const changeTitle = () => {
    heading.innerText = input.value
    input.value = ""
}

// event 
// property 
btn.onclick = () => {
    // heading.innerText = input.value
    changeTitle()
}

// method 
btn.addEventListener("click",() => {
    changeTitle()
})

// html attribute 
// <button onclick="changeTitle()" id="btn">click</button>
