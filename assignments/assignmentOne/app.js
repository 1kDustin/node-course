/*
Assignment:
    1. Spin up a server on port 3000
    2. handle two routes: '/' and '/users'
        -return some greeting text on '/'
        -return a list of dummy users (e.g. <ul><li>User 1</li></ul>)
    3. add a form with a username input to the '/' page and submit a POST
        request to '/create-user' upon a button click
    4. add a '/create-user' route and parse the incoming data (e.g. the username)
        and log it to the console
*/

const http = require('http')

const routes = require('./assignmentOne')

const server = http.createServer(routes)

server.listen(3000)