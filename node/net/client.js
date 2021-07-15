const { createConnection } = require('net');

const socket = createConnection(3000, 'localhost', () => {
    console.info('CONNECTED TO SERVER');
    // setInterval(() => {
    //    socket.write(`Vansham (${new Date().toLocaleString()})`) 
    // }, 1000);
    socket.setTimeout(1000, () => console.info('Socket has timed out'));
    socket.on('close', () => console.log('DISCONNECTED FROM SERVER'));
});
