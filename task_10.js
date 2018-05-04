const net = require('net');
const port = process.argv[2];

function addZero(time) {
    return time.toString().length > 1 ? time : `0${time}`;
}

function formatedDate() {
    const date = new Date();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const year = date.getFullYear();

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
    socket.end(formatedDate() + '\n');
})

server.listen(port);