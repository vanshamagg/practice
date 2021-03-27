import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { BullModule } from '@nestjs/bull'

import * as queueProcessors from './queue-processors'
import queues from './queue'

@Module({
  // imports: [ClientsModule.register([
  //   {
  //     name: "MATH_SERVICE",
  //     transport: Transport.REDIS,
  //     options: {
  //       host: '127.0.0.1',
  //       port: 6379
  //     }
  //   }
  // ]),
  imports: [
    BullModule.registerQueue(...Object.values(queues))
  ],
  controllers: [],
  providers: [
    ...Object.values(queueProcessors)
  ],
})
export class AppModule { }
