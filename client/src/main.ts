import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientProxy, ClientProxyFactory, ClientOptions, Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// const logger = new Logger('Main')
const microservicesOptions: ClientOptions = {
  transport: Transport.REDIS,
  options: {
    // host: "127.0.0.1",
    // port: 6379,
    url: 'rediss://default:ufxpil8hqamczpcf@nifty-uat-redis-do-user-6763863-0.db.ondigitalocean.com:25061'
  }
}

// Obtaining the hard instance of a microservice
// const client = ClientProxyFactory.create(microservicesOptions)

// client
//   .send('add', [1, 2, 3, 4])
//   .subscribe((result) => logger.log(`Recevied from microservice = ${result} `, result))

// HARD INSTANCE

const client = ClientProxyFactory.create(microservicesOptions)

client
  .emit('random', {name: "Vansham"})