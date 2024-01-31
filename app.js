/*
EXPRESS CORE CONCEPT:
https://expressjs.com/
express is all about middleware. For instace, instead of having just one request handler, we have
a possibility of hooking in multiple functions which the request will go through until we send the response.
We can travel from middleware to middle ware, from top to bottom using next()
*/

/*
SEND:
Send will check which type of data you are sending and will set the content type for you if you havent set it yourself.
It will also buffer chunks for you as well
*/

//REMEMBER TOP TO BOTTOM

//if we want to create a response that will trigger on every request, we want to give a path of '/',
//because this means it will run for any url that starts with '/'

const express = require('express')

const http = require('http')

// this creates the express application
const app = express()

app.use('/', (req, res, next) => {
    console.log('This will run on every request')
    next()
})

app.use('/add-product', (req, res, next) => {
    console.log('In the next middleware')
    //allows us to send a response. If we are using send, we never want to call next(),
    //because if we are sending a response, we dont want to send another response
    res.send('<h1>Add Product Page</h1>')
 })

app.use('/', (req, res, next) => {
    console.log('In the next middleware')
    //allows us to send a response
    res.send('<h1>Hello from express</h1>')
 })

//this works the same as create server and then will listen to the server creating the eventloop
 app.listen(3000)

