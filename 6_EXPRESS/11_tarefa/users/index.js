const express = require('express')
const path = require('path')
const router = express.Router()

const basePath = path.join(__dirname, '../templates')

router.get('/users', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router