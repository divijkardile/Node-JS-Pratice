class d{
    a;
    b;
    c;
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

var d1 = new d(1,2,3)
console.log(new d(1,2,3).a)

var d4 = (a, b) =>{
    return a + b;
}
 
console.log(d4(1, 2))

const app = require('./app.js')

console.log(app)
console.log(app.z(1))

const arr = [2, 1, 6, 5, 7, 3, 0, 2]

let q = arr.filter((data, i) => {
    return data === 2;
})

console.log(q)

const fs = require('fs')

fs.writeFileSync('hello.txt', 'Divij')