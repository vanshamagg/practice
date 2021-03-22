import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ppid } from 'node:process';
import { AppModule } from './app.module';
import { ClientOptions } from '@nestjs/microservices'

const microservicesOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    port: 3002,
    host: '127.0.0.1'
  }
}
const logger = new Logger('Main')
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions)

  app.listen(() => logger.log('Microservice will now listen'))
}
bootstrap();
