const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const PORT = process.argv[2];

const server = http.createServer();

server.on('request', (request, response) => {
    if (request.method === 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
          })).pipe(response)
    }

})

server.listen(PORT);