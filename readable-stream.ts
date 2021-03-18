import { createReadStream } from 'fs'

const readable = createReadStream('some-file.json', { highWaterMark: 1024, encoding: 'utf-8' })
readable.pause()
console.log('--- IS PAUSED? ', readable.isPaused());

const interval = setInterval(() => {
    let chunk = readable.read();
    console.log(chunk)
}, 1000)

readable.on('end', () => clearInterval(interval))