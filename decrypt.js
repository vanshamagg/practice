const crypto = require('crypto');
const { createImportEqualsDeclaration } = require('typescript');

const algo = 'aes128';
const key = crypto.scryptSync(
    'password',
    'salt',
    256 / 8,
)

const decipher = crypto.createDecipher(algo, key)
decipher.setEncoding('utf-8')

let decrypted = '';

decipher.on('data', (data) => decrypted += data)
decipher.on('end', _ => console.log(decrypted))

decipher.write('036b18c5738e26f3154a725436ff88d2958bc8549f14f61928e22ef1f62bb2ad63475ed934865b5499c4f7c4ef887199', 'hex');
decipher.end()





