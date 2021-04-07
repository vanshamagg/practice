const crypto = require('crypto')

const algo = 'aes-128-ocb';
const password = 'password for the key';
const key = crypto.scryptSync(password, 'SALT', 12);
const Ivector = Buffer.from('111111111111')
console.log(Ivector.length)
// const cipher = crypto.createCipher(algo, key);
const cipher = crypto.createCipheriv(algo, key, Ivector, { authTagLength: 16 })

let encrypted = '';
cipher.setEncoding('hex')
cipher
    .on('data', (chunk) => {
        encrypted += chunk;
    })
    .on('end', () => {
        console.log(encrypted)
    })

cipher.write('Some random piece of shit text');
cipher.end()
