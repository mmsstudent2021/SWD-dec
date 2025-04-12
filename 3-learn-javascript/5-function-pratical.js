// [
//     {width:30, breadth:60, result:1800}
//     {width:40, breadth:60, result:1800}
// ]

const results = []
let index = 0
// results[0] = {width:30, breadth:60, result:1800}
// results[1] = {width:40, breadth:60, result:1800}
// console.log(results);

// area = width * breadth 
const area = function (width,breadth) {
    let area = width * breadth
    results[index++] = {width, breadth, result: area}
    return `${area} sqft`
}

// console.log(area(30,60));
// console.log(area(40,60));
// console.log(area(10,40));
// console.log(results);

// amount * currency 
const rate = {
    usd: 3000,
    sgd: 1500
}
// rate.usd
// rate["usd"]

const exchangeToMMk = function (amount,currency) {
    // console.log(amount);
    // console.log(currency);
    let result = amount * rate[currency]
    return `${result} mmk`
}

// console.log(exchangeToMMk(200,"usd"));
// console.log(exchangeToMMk(200,"sgd"));

// amount / currency
const exchangeMMKToCurrency = function (amount,currency) {
    let result = amount / rate[currency]
    return result + " " + currency
}

// console.log(exchangeMMKToCurrency(600000,"usd"));

let total = 0
const buyFruit = function (fruitName,price,quantity) {
    let cost = price * quantity
    total += cost
    return `${fruitName} ${quantity} * ${price} => ${cost}`
}

// total * (percent / 100)
const findTax = function (total,percent) {
    let result = total * (percent/100)
    return result
}

// apple 2 * 500 => 1000

// console.log(buyFruit("apple",500,2));
// console.log(buyFruit("orange",600,2));
// console.log(buyFruit("banana",300,2));

// console.log("total => " + total);

let tax = findTax(total,5)
// console.log("tax => " + tax);

let netTotal = total + tax
// console.log("netTotal => " + netTotal);

// let name = "su su"
const obj = {
    // properties 
    name : "su su",
    age : 16,

    // method 
    run : function () {
        return `my name is ${this.name}`
    },

    // es6 
    run2 () {
        return "this is run 2"
    }
}

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
console.log(obj.run());
// console.log(obj.run2());

console.log(this);