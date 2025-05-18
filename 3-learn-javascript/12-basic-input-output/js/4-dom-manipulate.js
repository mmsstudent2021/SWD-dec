// Html element (js object phit lr) => attributes id class style twy ka js obj yae property twy phit lr
const heading = document.getElementById("heading")
console.dir(heading);
// console.dir(heading);

// console.log(heading.id);

// console.log(heading.className);
// console.log(heading.classList);

// console.log(heading.title);

// console.log(heading.style);
// console.log(heading.style.textAlign);
// console.log(heading.style.color);

// heading.style.color = "red"
// heading.style.textAlign = "right"
// heading.style.fontSize = "50px"

// classList 
// console.log(heading.className);
// console.log(heading.classList);

// console.log(heading.classList.add("aa","bb","cc"));
// console.log(heading.classList.remove("aa"));
// console.log(heading.classList.replace("cc","zz"));

// console.log(heading.classList.toggle("zz"));
// console.log(heading.classList.toggle("zz"));
// console.log(heading.classList.toggle("zz"));

// Pratical

// add background color 
const addBackgroundBtn = document.getElementById("addBackgroundBtn")

addBackgroundBtn.onclick = () => {
    heading.style.backgroundColor = "black"
}



// increase decrease font size 
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")

increase.onclick = () => {
    const currentFontSize = parseInt(heading.style.fontSize)
    // 40px 
    heading.style.fontSize = currentFontSize + 10 + "px"
}

decrease.onclick = () => {
    const currentFontSize = parseInt(heading.style.fontSize)
    heading.style.fontSize = currentFontSize - 10 + "px"
}



// show hide toggle box 
const toggle = document.getElementById("toggle")
const box = document.getElementById("box")
toggle.onclick = () => {
    box.classList.toggle("hide")
}



// skill count 
const skillCount = document.querySelector("#skillCount")
const skillBtn = document.querySelectorAll(".skill")

// console.log(skillBtn);

skillBtn.forEach(el => {
    // console.log(el);
    el.onclick = () => {
        el.classList.toggle("active")
        const countList = document.querySelectorAll(".skill.active")
        skillCount.innerText = countList.length
    }
});




// atrributes 
const a = document.querySelector("a")
console.log(a);
// a.href = "https://youtube.com"
// console.log(a.href);

// getAttribute, setAttribute, removeAttribute
// console.log(a.getAttribute("href"));
// console.log(a.getAttribute("target"));

// console.log(a.setAttribute("href","https://youtube.com"));

// console.log(a.removeAttribute("target"));

const img = document.querySelector("img")
console.log(img);
console.log(img.src);
console.log(img.getAttribute("src"));