class Test {
    x = ""
    a(){
        this.x += " a method"
        return this
    }

    b(){
        this.x += " b method"
        return this
    }

    c(){
        this.x += " c method"
        return this
    }
}

const test = new Test()
console.log(test.a().b().c());
// console.log(test.b());
// console.log(test.x);

const str = "   san kyi tar par    "
console.log(str.trim().toUpperCase().replace("KYI","pya"));