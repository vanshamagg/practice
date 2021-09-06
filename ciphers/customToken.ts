import { createCipheriv, createDecipheriv } from 'crypto';
import {DateTime} from 'luxon'

const key = '0000000000000000'; // CIPHER_LENGTH /  8
const iv = '1111111111111111'; // 16 BYTES

const cipher = createCipheriv('aes128', key, iv, {  });

const data = {
    name: 'vansham',
    iat: Date.now(),
    exp: DateTime.now().plus({days: 1}).toMillis(),
    era: 'Ragnar'
};

let enc = cipher.update(JSON.stringify(data), 'utf-8', 'base64');
enc += cipher.final('base64',);

console.log(`//` + enc);

const decipher = createDecipheriv('aes128', key, iv)
let dec = decipher.update(enc, 'base64', 'utf-8')
dec += decipher.final('utf-8')

console.log(JSON.parse(dec))
