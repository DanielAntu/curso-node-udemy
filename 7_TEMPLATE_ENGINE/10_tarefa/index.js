const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const carros = [
    {
        id: 1,
        marca: 'VW',
        ano: 2006,
        km: 2300,
        preco: 23000
    },

    {
        id: 2,
        marca: 'Fiat',
        ano: 2012,
        km: 50000,
        preco: 32000
    },

    {
        id: 3,
        marca: 'Ford',
        ano: 2017,
        km: 2300,
        preco: 80000
    },
]

app.get('/', (req,res) => {
    res.render('home', {carros})
})

app.get('/single/:id', (req,res) => {
    const product = carros[parseInt(req.params.id) - 1]
    res.render(`single`, {product})
})

app.listen(3000, () => console.log('App rodando na porta 3000'))