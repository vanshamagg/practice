import { io } from '../init'

export const ChatNsp = io.of('/chat').on('connection', socket => {
    console.info("SOMEONE CONNECTED TO THE CHAT NAMESPACE AS WELL")

    socket.on('chat_message', payload => {
        console.info('from chat nsp', payload)
    })
})