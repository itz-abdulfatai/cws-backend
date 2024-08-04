const fs = require('fs')


// console.log('hello world')

// const calculator = require('./test2')


// function sayHi() {
//     console.log(global)
// }

// sayHi()

// calculator.addition(3,4)
// calculator.subtraction(3,4)
// calculator.multiplication(3,4)
// calculator.division(3,4)


// const cp = require('child_process')

// cp.execSync('touch second.js')

// // i can use this to open an app, go to a website, basically anything i can do in a terminal

// // os module

// // const os = require('os')

// // console.log(os.arch())
// // console.log(os.platform())
// // console.log(os.cpus())

// // path module
// const path = require('path')

// let ext = path.extname('./second.js')

// let baseline = path.basename('./second.js')

// console.log(ext)

// console.log(baseline)

// console.log(__filename)

// console.log(__dirname)


// // reding a file

// const fileContent = fs.readFileSync('./first.txt')

// console.log('file content is => ' + fileContent)

// // write a file (creates the file for you if it does not exist))

// fs.writeFileSync('./second.txt', 'this is line 25')

// // append a file

// fs.appendFileSync('./second.txt', " \n this na update2")

// // deleting a file

// fs.unlinkSync('second.js')



// directry maras

// creating a directory

// fs.mkdirSync('created-directory')

// check content of a directory

// let folderPath = './created-directory'

// let folderContent = fs.readdirSync(folderPath)

// console.log(folderContent)
// console.log( 'folder content: ' + folderContent)

// check if a directory exist 

// let exists = fs.existsSync('created-directory')
// console.log(exists)

// deleting a directory 
// for empty directory 

// fs.rmdirSync('created-directory')

// for non empty 