//Node core modules: 
//http: launch a server and send requests
//https: Launch an SSL server
//fs:
//path:
//os:

//execute a specific file in terminal: node app.js

//require can be used to import either a file or a global module

const http = require('http')

const routes = require('./routes')

//node will execute the function inside of createServer whenever a request
//reaches the server. this function can ever be (req, res) => console.log(req, res)
const server = http.createServer(routes)

//listen for incoming requests at port 3000. Can define a host name here
server.listen(3000)

// ran node app.js --> started server.listen --> now the server is in an "event loop"
// which will keep running as long as there are event listeners registered.

//node.js doesnt stop itself when running code. This means that if we are handeling a response,
//the event loop will trigger your function, and continue on. As a loop, it will make its
//rounds and make its way back to each function ensuring they have run successfully
