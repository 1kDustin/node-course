/*
Express assignment one:
1. Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console
and return one response
2. Handle requests to '/' and'/users' paths such that each request only has one handler/middleware that does something with it
*/

const express = require('express')

const app = express()

//if we started with the '/' middleware first, node wouldnt register the /users middleware because it wont have a chance to.
//this is because all paths will begin with '/', therefore there would be no reason to continue to the next handler.
//So we will have to register /users first

app.use('/users', (req, res, next) => {
    console.log('the /users middleware')
    res.send('<p>The middleware that handles just /users</P>')
})

app.use('/', (req, res, next) => {
    console.log('the / middleware')
    res.send('<p>The middleware that handles just /</P>')
})

app.listen(3000)