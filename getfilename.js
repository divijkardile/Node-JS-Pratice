const fs = require('fs');
const path = require('path');
const data = require('./data')

const dirPath = path.join(__dirname, 'files');

// for(i = 0; i < 5; ++i){
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`, 'This is demo data')
// }

function getFile(err, file){
    console.log(file);
}

console.log(fs.readdirSync(dirPath))

var a = data

a = [...a, {email : 'dfd'}];

console.log(a); 