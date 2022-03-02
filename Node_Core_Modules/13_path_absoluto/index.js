const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//formar path
const midFolder = "relatorios"
const FileName = "jeff.txt"

const finalPath = path.join("/",'arquivos',midFolder,FileName)

console.log(finalPath)