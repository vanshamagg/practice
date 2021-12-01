import { scrypt } from 'crypto';
import { promisify } from 'util';

async function randomFunc(input: 'true' | 'false') {

  return new Promise((rs, rj) => {

  });


}


randomFunc('true')
  .then(console.info)
  .catch(console.error);