// // class => object template 

// // obj 
// const myself = {
//     name: "su su",
//     age: 20,
//     township: "hlaing",
//     run(){
//         return `my name is ${this.name}`
//     }
// }

// // console.log(myself)
// // console.log(myself.name)
// // console.log(myself.age)
// // console.log(myself.run())

// class Myself {
//     // name = "su su";
//     // age = 20;
//     // township = "hlaing";
//     // constructor(a,b){
//     //     console.log(a)
//     //     console.log(b)
//     // }

//     constructor(inputName, inputAge, inputTownship){
//         this.name = inputName
//         this.age = inputAge
//         this.township = inputTownship
//     }
//     run(){
//         // console.log("i am run")
//         return `my name is ${this.name}`
//     }
// }

// // class to obj => new keyword nat class ko instant sount
// const myself2 = new Myself("su su","20","hlaing")
// console.log(myself2)

// const myself3 = new Myself("mg mg","16","hlaing")
// console.log(myself3)
// // console.log(myself2.age)
// // console.log(myself2.run())

// // constructor 
// // 1 => instant sount tr nat a lote lote
// // 2 => instant sount pee argument pay lite pee constructor ka nay pyn use lox ya

// Access modifier => public | private #
// static => class ka nay tan call lox | instance sout sayar ma lo
class Myself {
    static name = "ag ag"
    #age = 15
    run(){
        // ag ag is 15 years old 
        return `${this.name} is ${this.#age} years old `
    }
}

const myself = new Myself()
// console.log(myself)
// console.log(myself.name)
// console.log(myself.run())
// console.log(myself.run())

// console.log(Myself.name)

// OOP concept 
// inheritance 
class A {
    a = "aa"
    b = "bb"
    c = "cc"
}

class B extends A{
    x = "xx"
    y = "yy"
    z = "zz"
}

const a = new A()
const b = new B()

// console.log(a)
// console.log(b)

class Person {
    // name = "mg mg"
    // age = 15
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class Student extends Person{
    // name = "su su"
    // age = 15
    // school = "no.4"
    constructor(name,age,school){
        // this.name = name
        // this.age = age
        super(name,age)
        this.school = school
    }
}

const person = new Person("mg mg",15)
const student = new Student("ma ma", 15, "no.4")

// console.log(person)
// console.log(student)

class Free {
    repo = "unlimited"
    push(){
        console.log("push")
    }
    pull(){}
}

class Team extends Free{
    codeSpace = true
    run(){
        console.log("run")
    }
}

class Enterprise extends Team {
    dataResidency = true
    run2(){}
}

const free = new Free()
const team = new Team()
const enterprise = new Enterprise()

// console.log(free)
// console.log(team)
// console.log(team.run())
// console.log(team.push())
// console.log(enterprise)

// encapsulation 
class Z {
    #value = 0

    // getter, setter 
    getter(){
        return this.#value
    }

    setter(newValue){
        return this.#value = newValue
    }
}

const z = new Z()
// console.log(z.getter())
// z.value += 10
// console.log(z.setter(10))
// console.log(z)

class Bank{
    #money = 0

    // getter,setter 
    checkMoney(){
        return this.#money
    }

    deposit(amount){
        return this.#money += amount
    }

    withDraw(amount){
        if(amount < this.#money){
            this.#money -= amount
            return `withdraw money ${amount} successfully`
        }
    }

    transfer(amount,whom){
        if(amount < this.#money){
            this.#money -= amount
            return `transfer ${amount} to ${whom} successfully`
        }
    }
}

const bank = new Bank()
// bank.money += 50000
console.log("check money => " + bank.checkMoney())
console.log("deposit money => " + bank.deposit(50000))
console.log("check money => " + bank.checkMoney())
console.log("withdraw money => " + bank.withDraw(20000))
console.log("check money => " + bank.checkMoney())
console.log("transfer money => " + bank.transfer(10000,"ma ma"))
console.log("check money => " + bank.checkMoney())





