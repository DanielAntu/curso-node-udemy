const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {
    const itens = ['Item a', 'Item b', 'Item c']


    res.render('dashboard', {itens})
})

app.get('/post', (req,res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai ajudar a aprender Node.js...',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/', (req,res) => {

    const auth = true

    const approved = true

    const user = {
        name: 'Daniel',
        surname: 'Antunes',
        age: 30
    }

    const palavra = 'Teste'

    res.render('home', {user:user, palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})