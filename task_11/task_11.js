const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const FILE = process.argv[3];

const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(FILE);
    stream.pipe(response);
})

server.listen(PORT);