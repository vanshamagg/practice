import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientProxy, ClientProxyFactory, ClientOptions, Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

const logger = new Logger('Main')
const microservicesOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: "127.0.0.1",
    port: 3002
  }
}

const client = ClientProxyFactory.create(microservicesOptions)

client
  .send('add', [1, 2, 3, 4])
  .subscribe((result) => logger.log(`Recevied from microservice = ${result} `, result))