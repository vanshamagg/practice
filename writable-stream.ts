import { createWriteStream } from 'fs';
import { createReadStream } from 'fs';

const data = {
    name: 'Vansham',
    age: 24
}
const readable = createReadStream('some-file.json', { highWaterMark: 1024 })
const writable = createWriteStream('output.txt', { encoding: 'hex' })

readable.pipe(writable)

readable.on('data', (chunk) => {
    // console.log(chunk)
})

readable.on('end', ()=> {
    console.info('-- READABLE STREAM HAS ENEDED')
})


writable.on('finish', ()=> {
    console.log('-- WRITABLE FINISH')
})