const { createReadStream } = require('fs')
const { join } = require('path')

const readable = createReadStream(join(__dirname, 'streams.ts'), { encoding: 'utf8' })

readable.pipe(process.stdout)
readable.on('end', ()=> {
    process.stdout.write('\n')
})

process.stdin.write('>')