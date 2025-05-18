// id => element ko tan select
const headingId = document.getElementById("headingOne")


// tag name , class => HTML Collection => [0],[1]
const headingThreeTag = document.getElementsByTagName("h3")
const headingThreeClass = document.getElementsByClassName("headingThree")


// querySelectorAll , querySelect => (#id,.class,tagName)
// querySelectorAll => Node List => [0],[1]
const headingThree = document.querySelectorAll("h3")
// querySelectorAll => id nat ta khu pl select ll => Node List => [0],[1]
const headingOne = document.querySelectorAll("#headingOne")


// querySelector => 1 khu pl select pay , class tag element myer yin tg first element pl select lote tl
const heading = document.querySelector("#headingOne")
const list = document.querySelector("li")
console.log(list);