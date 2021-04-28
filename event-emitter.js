const { EventEmitter } = require('events')

const emitter = new EventEmitter()

emitter.on('some', (data) => console.info(data))

emitter.emit('some', { name: "Vansham Aggarwal" })