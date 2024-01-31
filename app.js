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

//app.use will work for all request methods (e.g. get, post, ..)

const express = require('express')
const bodyParser = require('body-parser')

// this creates the express application
const app = express()

//register our parser at the top. this will not parse files
app.use(bodyParser.urlencoded({extended: false}))

//this will submit some text from the input which will send us to /product, which will trigger and log the body of the request, then redirect us back to '/'
app.use('/add-product', (req, res) => {
    //allows us to send a response. If we are using send, we never want to call next(),
    //because if we are sending a response, we dont want to send another response
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
 })

 //log the request body then redirect back to the home '/'. this will only run for incoming post requests
app.post('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    //allows us to send a response
    res.send('<h1>Hello from express</h1>')
 })

//this works the same as create server and then will listen to the server creating the eventloop
 app.listen(3000)

