import { eachSeries } from 'async';
import * as tar from 'tar-stream';
import axios from 'axios';
import { IncomingMessage } from 'http';
import { createGzip, constants, createDeflate } from 'zlib';
const tarball = tar.pack();

const uris = [
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg',
];

(async () => {
    await eachSeries(
        uris,
        async function (file, cb) {
            const { readable, name, size } = await getStream(file);
            const writable = tarball.entry({ name, size });
            readable.pipe(writable);
            await new Promise((res, rej) => {
                writable.on('finish', () => res('ok'));
                writable.on('error', (err) => rej(err));
                readable.on('error', (err) => rej(err));
            });
            return cb;
        }
    );
    tarball.finalize();

})();

// Gets the readable stream for each file + other props
async function getStream(file: string) {
    const readable: IncomingMessage = (await axios.get(file, { responseType: 'stream' })).data;
    const size: number = +readable.headers['content-length'];
    const name = new Date().toString() + '.png';
    return { readable, size, name };

}

const gZipCompress = createGzip({ level: constants.Z_BEST_COMPRESSION });

//  use this stream anywhere now
export = tarball.pipe(gZipCompress);