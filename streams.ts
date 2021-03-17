import { createReadStream } from 'fs';


createReadStream('some-file.json', { encoding: 'utf-8' }).on('data', (chunk) => {
    console.log(chunk + "\n")
})