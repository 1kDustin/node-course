const express = require('express')

const router = express.Router()

//this will submit some text from the input which will send us to /product, which will trigger and log the body of the request, then redirect us back to '/'
//we only want to handle get requests here
router.get('/add-product', (req, res) => {
    //allows us to send a response. If we are using send, we never want to call next(),
    //because if we are sending a response, we dont want to send another response
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
 })

 //log the request body then redirect back to the home '/'. this will only run for incoming post requests
router.post('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

//export the handlers registered in this file for use elsewhere
module.exports = router