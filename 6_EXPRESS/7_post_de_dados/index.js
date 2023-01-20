const express = require('express')
const app = express()
const port = 3000 // variavel de ambiente

const path = require('path')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req,res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e ele tem ${age}`)

    res.sendFile(`${basePath}/userform.html`)
})


app.get('/users/:id', (req,res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})