const express = require('express')

const router = express.Router()

app.get('/', (req, res, next) => {
    //allows us to send a response
    res.send('<h1>Hello from express</h1>')
 })

 module.exports = router