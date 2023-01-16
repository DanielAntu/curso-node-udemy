const path = require('path')

// path absoluto

console.log(path.resolve('teste.txt'))

// formar path
const midfolder = 'relatorios'
const fileName = 'matheus.txt'

const finalPath = path.join('/', 'arquivos', midfolder, fileName)
console.log(finalPath)