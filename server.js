// Import the HTTP library
const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
    // runs when a request is received
    console.log(request.url);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    // runs when the server is started
    console.log(`Server running at http://${hostname}:${port}/`);
});
