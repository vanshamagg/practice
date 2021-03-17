import { createReadStream } from 'fs';


createReadStream('some-file.json', { encoding: 'utf-8', highWaterMark: 1 }).on('data', (chunk) => {
    process.stdout.write(chunk + '\n')
})
