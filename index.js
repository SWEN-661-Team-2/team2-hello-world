
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, World! From Corey\n');
    res.end('Hello World!!! From James!\n');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});