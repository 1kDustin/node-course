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

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

//register our parser at the top. this will not parse files
app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRouter)
app.use(shopRouter)

//if url doesnt exist, return a 404 status code with some html
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

//this works the same as create server and then will listen to the server creating the eventloop
 app.listen(3000)

