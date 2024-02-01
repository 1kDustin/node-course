const express = require('express')

const router = express.Router()

//.get and .post will only look for the exact match of '/'. .use will will look for any url starting with '/' depending 
//on the order you define your middleware
router.get('/', (req, res, next) => {
    //allows us to send a response
    res.send('<h1>Hello from express</h1>')
 })

 module.exports = router