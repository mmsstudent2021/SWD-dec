// class => object template 

// obj 
const myself = {
    name: "su su",
    age: 20,
    township: "hlaing",
    run(){
        return `my name is ${this.name}`
    }
}

// console.log(myself)
// console.log(myself.name)
// console.log(myself.age)
// console.log(myself.run())

class Myself {
    // name = "su su";
    // age = 20;
    // township = "hlaing";
    // constructor(a,b){
    //     console.log(a)
    //     console.log(b)
    // }

    constructor(inputName, inputAge, inputTownship){
        this.name = inputName
        this.age = inputAge
        this.township = inputTownship
    }
    run(){
        // console.log("i am run")
        return `my name is ${this.name}`
    }
}

// class to obj => new keyword nat class ko instant sount
const myself2 = new Myself("su su","20","hlaing")
console.log(myself2)

const myself3 = new Myself("mg mg","16","hlaing")
console.log(myself3)
// console.log(myself2.age)
// console.log(myself2.run())

// constructor 
// 1 => instant sount tr nat a lote lote
// 2 => instant sount pee argument pay lite pee constructor ka nay pyn use lox ya