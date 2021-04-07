const crypto = require('crypto');

const algo = 'aes-192-cbc';
const password = 'password for the key';
const key = crypto.scryptSync(password, 'SALT', 24);
const Ivector = Buffer.from('something random')

// const decipher = crypto.createDecipher(algo, key)
const decipher= crypto.createDecipheriv(algo, key, Ivector);

let decrypted = ''
decipher.setEncoding('utf-8');

decipher
    .on('data', (chunk) => {
        decrypted += chunk
    })
    .on('end', _ => {
        console.log(decrypted)
    })

decipher.write('898b7b9476aa9f9c5bb774dcc48c8c15de03adf3133cc5f82e0de437d70d0d2d', 'hex')
decipher.end()    
// let encrypted = '';
// cipher.setEncoding('hex')
// cipher
//     .on('data', (chunk) => {
//         encrypted += chunk;
//     })
//     .on('end', () => {
//         console.log(encrypted)
//     })

// cipher.write('Some random piece of shit text');
// cipher.end()
