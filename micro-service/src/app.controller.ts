import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices'

const logger = new Logger('Microservice_Add')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  @MessagePattern('add')
  accumulate(data: number[]) {
    logger.log('Message received from the client')
    return data.reduce((sum, number) => sum + number)
  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
