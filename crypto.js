const { until } = require('async');
const crypto = require('crypto');

// // scrypt hashing
// const hash = crypto.scryptSync(
//     "random",
//     "salt string",
//     1
// ).toString('hex')


// CIPHER

// const hash = crypto.createHash('')



// const algo = 'aes128';
// const key = crypto.scryptSync('some random shit', 'salt', 128/8)
// const iVector = crypto.randomFillSync(Buffer.alloc(16));

// const cipher =  crypto.createDecipheriv(algo, key, iVector)

// let encrypted = cipher.update('the data to be encrypted')
// encrypted += cipher.final()
// console.log(encrypted)

// const decipher = crypto.createDecipheriv(algo, key, iVector)
// let decrypted = decipher.update(encrypted)
// console.log(decrypted.toString('ascii'))

// console.log(crypto.getCiphers())



// console.log(crypto.getCiphers())

console.clear()

const random = crypto.randomBytes(1).toString('hex')

console.log(random)
