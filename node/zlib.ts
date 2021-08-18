import { createGzip } from 'zlib';
import { createReadStream, createWriteStream, read } from 'fs';

const files = [
    __dirname + '/' + 'readline.js',
    __dirname + '/' + 'logdna.ts'
];

const createStream = (file: string) => createReadStream(file, { encoding: 'utf-8' });
// const readable = createReadStream(__dirname + '/' + 'readline.js', { encoding: 'utf-8' });
const zip = createGzip();
const writable = createWriteStream(__dirname + '/' + 'readline.js.gz');

files.forEach(file => {
    const readable = createStream(file);
    readable
        .pipe(zip)
        .pipe(writable);
});

// readable
//     .pipe(zip)
//     .pipe(writable);

