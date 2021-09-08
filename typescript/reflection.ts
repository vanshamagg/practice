import { Method } from 'axios';
import { METHODS } from 'http';
import 'reflect-metadata';

const TOPIC = 'topic:name';
const TOPIC_HANDLERS = 'topic:handlers:hash';

// topic decorator
function Topic(topic: string): any {
  return (target: Object, methodName, descriptor: TypedPropertyDescriptor<any>): void => {
    Reflect.defineMetadata(TOPIC, topic, target, methodName);
    // return descriptor;
  };
};

// class decorator
function Multiplexer(): ClassDecorator {
  return (target) => {
    const hash = {};
    Reflect.defineMetadata(METHODS, Object.keys(target.prototype), target.prototype);
    Object.keys(target.prototype)
      .filter(key => Reflect.hasOwnMetadata(TOPIC, target.prototype, key))
      .forEach(key => hash[Reflect.getMetadata(TOPIC, target.prototype, key)] = target.prototype[key]);

    Reflect.defineMetadata(TOPIC_HANDLERS, hash, target.prototype);
  };
};

@Multiplexer()
class TopicHandler {

  @Topic('vansham')
  public handleVansham(data: any) {
    console.log('DATA RECEIVED', data);
  }

  @Topic('shweta')
  public handle(data: any): any {
    console.log('DATA RECEIVED', data);

  }

  multiplexData(data: any) {
    const topic = data['topic'];
    if (topic) {
      Reflect.getMetadata(TOPIC_HANDLERS, TopicHandler.prototype)[topic](data)
    }
  }

}

const th = new TopicHandler();
console.info(Reflect.getOwnMetadata(TOPIC_HANDLERS, TopicHandler.prototype));
th.multiplexData({ topic: 'vansham' });