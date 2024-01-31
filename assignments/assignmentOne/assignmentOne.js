const requestHandler = (req, res) => {
    const url = req.url

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment One</title><head>');
        res.write('<h1>Assignment One</h1>')
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
          );
        res.write('</html>');
        res.end()
    }

    if (url === '/users') {
        res.write('<html>')
        res.write('<body><ul><li>User 1</li></ul></body>')
        res.write('/html')
        res.end()
    }

    if (url === '/create-user') {
        const body = []
        
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            res.statusCode = 302
            console.log(parsedBody)
            return res.end()
        })
    }
}

module.exports = requestHandler