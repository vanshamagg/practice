const crypto = require('crypto');
const { createImportEqualsDeclaration } = require('typescript');

const algo = 'aes128';
const key = crypto.scryptSync(
    'password',
    'salt',
    256 / 8,
)

const cipher = crypto.createCipher(algo, key)
cipher.setEncoding('hex')

let encrypted = '';

cipher.on('data', (data) => encrypted += data)
cipher.on('end', _ => console.log(encrypted))

const data = JSON.stringify({
    message: {
        new: "World will end"
    }
})
cipher.write(data);
cipher.end()





