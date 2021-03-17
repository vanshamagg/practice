import { createReadStream } from 'fs';
import { read } from 'fs/promises';


const readable = createReadStream('some-file.json', { encoding: 'utf-8', highWaterMark: })

readable.on('data', (chunk) => {
    process.stdout.cork()

    process.stdout.write(chunk + '\n')
    

})

readable.on('close', ()=> process.stdout.uncork())

// setTimeout(() => { process.stdout.uncork() }, 0)

process.stdout.cork()
process.stdout.write("SOMETHING \n")
process.stdout.cork()
process.stdout.write("ELSE \n")

process.stdout.uncork()
// process.stdout.uncork()
