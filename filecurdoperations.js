const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'curd')
const filePath = `${dirPath}/apple.txt`

//fs.writeFileSync(filePath, 'This is sample!!!') //-- Create and write data
//fs.appendFile(filePath, 'This is deeee', (err) => console.log(err))
// var fileData = (err, data) =>{
//     console.log('jere')
//     console.log(data)
// }
//fs.readFile(filePath, 'utf-8', fileData) // Asynchronously reads the entire contents of a file.

// fs.appendFileSync(filePath, ' This is append data')
// console.log(`fgfdg ${fs.readFileSync(filePath, 'utf-8')}`) // Synchronously reads the entire contents of a file.

//fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => console.log(err)) // Rename file

fs.unlink(`${dirPath}/fruit.txt`, (err) => console.log(err))
