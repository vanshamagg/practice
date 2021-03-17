import { createReadStream } from 'fs';
import { read } from 'fs/promises';


const readable = createReadStream('some-file.json', { encoding: 'utf-8' })

// readable.on('data', (chunk) => {

//     process.stdout.write(chunk + '\n')

//     console.log("BYTES READY ---",process.stdout.writableLength)

// })

readable.pipe(process.stdout)

process.stdout.cork()
process.stdout.write("SOMETHING \n")
process.stdout.cork()
process.stdout.write("ELSE \n")
console.log(process.stdout.writableCorked)


process.stdout.uncork()
process.stdout.uncork()

console.log("--- WRITABLE STREAM PROPS ---")
console.log(process.stdout.writableHighWaterMark)
console.log(process.stdout.writableFinished)
console.log(process.stdout.writableCorked)
console.log(process.stdout.writableLength)
