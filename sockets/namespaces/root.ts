import { io } from '../init'

export const RootNsp = io.of('/').on('connection', socket => {

    console.info('someone connected')

    // console.info('SOCKETS', socket.nsp.sockets)
    socket.on('chat_message', (payload) => {
        socket.broadcast.emit('chat_message', payload)
        console.info(payload)
    })
    socket.on('disconnect', () => {
        console.log('someone disconnected')
    })
})