const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn').run

const app = express()

const productRoutes = require('./routers/productRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.static('public'))

app.use('/products', productRoutes)

app.use(express.json())

app.listen(3000)