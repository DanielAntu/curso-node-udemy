const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {
    res.render('dashboard')
})

app.get('/', (req,res) => {

    const auth = false

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