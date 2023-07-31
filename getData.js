const fs = require('fs')

fs.writeFileSync(process.argv[2], process.argv[3]) // create or write file

fs.unlinkSync(process.argv[2]) // delete file
console.log(process.argv)