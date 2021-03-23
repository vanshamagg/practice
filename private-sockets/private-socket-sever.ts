import * as express from 'express';
import { Server } from 'socket.io'

const PORT = 3003;

const app = express()



app.use(express.static('./static'))

const httpServer = app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

const socketIO = new Server()
socketIO.attach(httpServer)

socketIO.on('connect', (socket) => {
    console.info(`Socket ID ${socket.id} Connected!`)

    socket.on('disconnect', () => {
        console.info(`Socket ${socket.id} disconnected`)
    })


    socket.on('message', (payload) => {
        console.info('Message received from ' + payload.sender)

        socket.join(payload.receiver)
        // socket.join(payload.sender)

        socket.to(payload.receiver).emit('message', payload)

        console.info('Message sent to ' + payload.receiver)
        

    })
})
