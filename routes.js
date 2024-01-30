const http = require('http');
//fs allows us to work with the file system
const fs = require('fs');

const server = http.createServer((req, res) => {
  //base url
  const url = req.url;
  const method = req.method;

  //if at base url, return an input thats expecting a post req with a username
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Users List</title><head>');
    res.write(
        '<body><ul><li>User 1</li></ul></body>'
      );
      res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
      );
    res.write('</html>');
    res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});
