const http = require('http');
const url = require('url');

const PORT = process.argv[2];

const server = http.createServer();

server.on('request', (request, response) => {
    const request_url = url.parse(request.url, true);
    const requested_date = request_url.query.iso;

    const date_object = new Date(requested_date);
    const hour = date_object.getHours();
    const minute = date_object.getMinutes();
    const second = date_object.getSeconds();

    const parsetime_response = {hour, minute, second};
    const unixtime_response = {
        unixtime: Date.parse(requested_date)
    };

    if (request.method === 'GET') {
        
        if (request_url.pathname === '/api/parsetime') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify(parsetime_response));
            response.end();
        }

        if (request_url.pathname === '/api/unixtime') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify(unixtime_response));
            response.end();
        }
    } else {
            response.writeHead(404);
            response.write(new Error('Bad request method!'));
            response.end();
    }
})

server.listen(PORT);