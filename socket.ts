import * as express from 'express';
// import { Server, Namespace } from 'socket.io';
import { io } from './sockets'
// const io = require('socket.io')
const app = express()
app.use(express.static('static'))
const server = app.listen(3000, () => console.log(`server started at 3000`))
io.listen(server)
// console.dir(io)
// const io = new Server()
// io.listen(server)

// root namespace


// /chat namespace





