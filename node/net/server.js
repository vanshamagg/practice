const net = require('net');

const server = net.createServer(

    (socket) => {
        socket.setTimeout(10000)
        console.info('CLIENT CONNECTED ', socket.remoteAddress);
        socket.on('close', ()=> console.log('CLIENT DISCONNECTED ', socket.remoteAddress))
        socket.on('data', (data) => console.info(`ON SERVER ${ data }`));
        
    });
server.listen(3000, () => console.log(`Server is now listening on PORT ${ server.address().port }`));