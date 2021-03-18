import { createWriteStream } from 'fs';
import { createReadStream } from 'fs';

const data = {
    name: 'Vansham',
    age: 24
}
const readable = createReadStream('some-file.json', { highWaterMark: 1024 })
const writable = createWriteStream('output.txt', { encoding: 'hex' })
readable.pause()

// readable.pipe(writable)

// readable.on('data', (chunk) => {
//     // console.log(chunk)
// })

// readable.on('end', ()=> {
//     console.info('-- READABLE STREAM HAS ENEDED')
// })


// writable.on('finish', ()=> {
//     console.log('-- WRITABLE FINISH')
// })

// WRITING DATA IN PAUSE MODE

function write() {

    const interval = setInterval(() => {
        let chunk = readable.read();
        writable.write(chunk)
        console.log('-- WROTE A CHUNK --')

    }, 1000)
    readable.on('end', () => {
        clearInterval(interval)
        console.info('--- THE STREAMS HAVE CLOSED')
    })

}

// WRITING DATA IN FLOW MODE

function writeFlow() {

    writable.on('finish', (src) => {
        console.log('--- DATA WRITING FINISHED IN FLOW MODE')
    })

    writable.on('pipe', (src) => {
        console.info('--- PIPING STARTED')
    })

    readable.on('data', () => {
        console.log('--- DATA CHUNK READ')
    })

    readable.pipe(writable)

}

// USING CORKING WITH PAUSE MODE

function writeWithCork() {

    readable.on('readable', _ => {
        console.log('-- DATA LOADED IN BUFFER')
    })

    writable.cork() //collecting data in buffer
    const interval = setInterval(() => {
        let chunk = readable.read()
        writable.write(chunk)

        console.info(' \n --- CHUNK LOADED IN BUFFER :/')
        console.log(' --- IS WRITABLE CORKED? ', writable.writableCorked > 0 ? "true" : 'false')
    }, 1000)

    readable.on('end', () => {
        writable.uncork()
        console.log('-- BUFFER UNCORKED')
        console.info('--- NOTHING MORE TO READ')
        clearInterval(interval)
    })

    readable.on('close', _ => console.info('--- READABLE STREAM HAS CLOSED'))

}

writeWithCork()