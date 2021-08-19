import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const key = '1111111111111111';
const iv = '2222222222222222'
console.log(iv)
const cipher = createCipheriv('aes128', key, iv,);

let encrypted = cipher.update('Vansham', 'utf-8', 'hex');
encrypted += cipher.final('hex');

console.log(encrypted)

const iv2 = randomBytes(16)
const decipher = createDecipheriv('aes128', key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
decrypted += decipher.final('utf-8')

console.log(decrypted)