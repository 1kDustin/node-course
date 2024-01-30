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
        req.on('end', () => {
            //Buffer reads the chunks
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            //will write a file called message.txt containing the parsedBody
            fs.writeFileSync('message.txt', message)
        })
        //will write a file called message.txt containing the text 'Dummy'
        fs.writeFileSync('message.txt', 'Dummy')
        //statusCode 302 is redirection. will redirect user back to url '/'
        res.statusCode = 302
        //will set the header to location
        res.setHeader('Location', '/')
        return res.end()
    } 

}

module.exports = {requestHandler}