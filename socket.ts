import * as express from 'express';
import { Server } from 'socket.io';
const app = express()
app.use(express.static('static'))
const server = app.listen(3000, () => console.log(`server started at 3000`))

const io = new Server()
io.listen(server)

io.on('connection', socket => {
    console.info('someone connected')

    socket.on('chat_message', (payload) => {
        socket.broadcast.emit('chat_message', payload)
        console.info(payload)
    })
    socket.on('disconnect', () => {
        console.log('someone disconnected')
    })
})


