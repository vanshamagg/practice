import { deserializeArray, serialize, deserialize } from 'class-transformer';

class Schema {

  constructor(
    public readonly name: string,
    public readonly age: numberasas
  ) {}

}

const obj = new Schema('Vansham', 25);
console.log(deserialize(Schema, serialize(obj)));