// imperative 
// 1 => procedural programming
// 2 => object oriented programming (oop)

// imperative => lo chin tae result ko a sint sint yay
const points = [34, 15, 2, 52, 19, 56, 30, 57];
let total = 0
for(let i = 0; i < points.length; i++){
    // console.log(points[i])
    total += points[i]
}
console.log(total)

// procedural => lo chin tae result ko a sint sint yay pee function htl hmr thein tl 
const sumArr = function (numArr) {
    let total = 0
    for(x of numArr){
        total += x
    }
    return total
}
console.log(sumArr(points))

// OOP => lo chin tae result ko a sint sint yay pee obj htl hmr thein tl 
const arraySumObj = {
    arr: [],
    sum(){
        let total = 0
        for(x of this.arr){
            total += x
        }
        return total
    }
}

arraySumObj.arr = [1,2,3]
console.log(arraySumObj.sum())

arraySumObj.arr = points
console.log(arraySumObj.sum())