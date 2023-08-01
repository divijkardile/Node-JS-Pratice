let a = 10;
let b = 20;

let waitingData = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(30)
        //reject(40)
    }, 2000);
}).then((data) => {
    console.log(a + data)
}).catch((err) => {
    console.log("Error")
})