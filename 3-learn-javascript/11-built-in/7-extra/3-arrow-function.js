// function statement 
function run (x,y) {
    return "run"
}

// function expression 
const run2 = function (x,y) {
    return "run 2"
}

// arrow function =>
// x => parameter takhu htl so () ma lo , 
// _ => parameter ma htae chin yin _

// one line so return pyan sayar ma lo 

const run3 = (x) =>  {
    return "run 3"
}

// console.log(run3());

const obj = {
    a: "aa",
    b(){
        return this
    },

    // arrow fn nat yay yin this ka window ko pya 
    c:  () =>  {
        return this
    }
}

console.log(obj);
console.log(obj.b());
console.log(obj.c());
console.log(this);