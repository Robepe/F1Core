const http = require('node:http');
const fs = require('node:fs');
const port = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: ', error.message)
        } else {
            res.write(data);
        }
    })
})