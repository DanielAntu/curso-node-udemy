const express = require('express')
const path = require('path')
const users = require('./users')

const app = express()
const port = 5000

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.use('/usuarios', users)

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => console.log(`server rodando na porta ${port}`))