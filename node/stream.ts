import { createWriteStream } from 'fs';

const obj: any = {};
obj.name = 'Vansham "Aggarwal"';
obj.age = {
    first: 25,
    last: 25
};
console.log(JSON.stringify(obj, null,));
const writable = createWriteStream('sample.json');
writable.write(JSON.stringify(obj, null, 4));
writable.end();

