const width = document.getElementById("width")
const breadth = document.getElementById("breadth")
const calculateBtn = document.getElementById("calculateBtn")
const result = document.getElementById("result")
const storeBtn = document.getElementById("storeBtn")
const clearBtn = document.getElementById("clearBtn")
const listGroup = document.getElementById("listGroup")

const area = (w,b) => w * b

calculateBtn.onclick = () => {
    const w = width.valueAsNumber
    const b = breadth.valueAsNumber
    const a = area(w,b)
    // 20ft * 30ft = 600sqft
    result.innerText = `${w} ft * ${b} ft = ${a} sqft`
    width.value = ""
    breadth.value = ""
}

clearBtn.onclick = () => {
    result.innerText = ""
}

storeBtn.onclick = () => {
    listGroup.innerHTML += `<li>${result.innerText}</li> `
    result.innerText = ""
}