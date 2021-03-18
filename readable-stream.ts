import { createReadStream } from 'fs'

const readable = createReadStream('some-file.json', { encoding: 'utf8' })

readable.on('readable',  _ => {
    console.info('---- NEW DATA IN BUFFER')

    let chunk;
    while((chunk = readable.read(500))) {
        console.log(chunk)
    }

})