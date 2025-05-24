const body = document.querySelector("body")

// body > h1 
const h1 = document.createElement("h1")
h1.innerText = "Create Element"
body.append(h1)
// console.log(h1);
// console.log(body);



// body > div > img 
const div = document.createElement("div")

const img1 = document.createElement("img")
img1.setAttribute("src","./image/poe-mamhe-thar-2.jpg")
img1.setAttribute("width",300)

const img2 = new Image(300)
img2.setAttribute("src","./image/poe-mamhe-thar-2.jpg")

div.append(img1)
div.append(img2)
body.append(div)

// console.log(div);
// console.log(img1);
// console.log(img2);



// body > p 
const p = document.createElement("p")
p.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt enim, labore molestias dolorem ipsam ducimus animi officia quas quidem, esse amet consequuntur provident! Laborum, maiores amet aliquid vel magni architecto!"
// body.append(p)



// body > ul > li 
const ul = document.createElement("ul")

const createList = (text) => {
    const li = document.createElement("li")
    li.innerText = text
    return li
}

ul.append(createList("apple"))
ul.append(createList("orange"))
ul.append(createList("mango"))
// console.log(ul);



// append => parent element yae htote sone
// prepend => parent element yae out sone 
// body.prepend(ul)
// body.prepend(p)

// before => selected element yae a paw
// after => selected element yae out 
h1.before(p)
h1.after(ul)


// remove => element remove
p.remove()
// ul.remove()

// removeChild => parent htl ka child ta khu pl remove 
// console.dir(ul.children[1]);
ul.removeChild(ul.children[1])
ul.children[1].remove()