//Node core modules: 
//http: launch a server and send requests
//https: Launch an SSL server
//fs:
//path:
//os:

//execute a specific file in terminal: node app.js

//require can be used to import either a file or a global module

const http = require('http')

// const routes = require('./assignments/assignmentOne')
const routes = require('./assignments/assignmentOne')

//node will execute the function inside of createServer whenever a request
//reaches the server. this function can ever be (req, res) => console.log(req, res)
const server = http.createServer(routes.requestHandler)

//listen for incoming requests at port 3000. Can define a host name here
server.listen(3000)

// ran node app.js --> started server.listen --> now the server is in an "event loop"
// which will keep running as long as there are event listeners registered.
