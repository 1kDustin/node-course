// Streams and Buffers
//an incoming request is a stream, that is broken down into parts
//a buffer allows us to grab chunk and work with them before they are released

    const fs = require('fs')
    
    const requestHandler = (req, res) => {
    //base url
    const url = req.url
    const method = req.method

    //if base url, return an input and send button that handles an action navigating a
    //user to the create-user url, and expects a post request of the users input
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
          );
        res.write('</html>');
        res.end()
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        //req.on allows us to listen to certain eventsthe data event will be fired 
        //whenever there is a new chunk thats ready to be read. On data, this listener
        //receives a chunk of data
        req.on('data', (chunk) => {
            //on a new chunk ready to be read, we will push it to the body
            body.push(chunk)
        })

        //on end will be fired once we are done reading all of the chunks of data
        //this will be our event listener that will execute writing a file once we are done
        //parsing the request, which will then execute more logic once we are done writing the file
       return req.on('end', () => {
            //Buffer reads the chunks
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            //will write a file called message.txt containing the parsedBody
            //writeFileSync will block execution of the next line of code until this file
            //is done being written. We dont want the server to stop and wait, so instead 
            //we should use writeFile
            fs.writeFile('message.txt', message, (error) => {
                //this response should only be sent when we are done working with the file

                //statusCode 302 is redirection. will redirect user back to url '/'
                res.statusCode = 302
                return res.end()  
            })
        })
    } 
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Page One</title><head>');
        res.write('<body><h1>Node JS page one</h1></body>');
        res.write('</html>');
        res.end()
}

module.exports = requestHandler