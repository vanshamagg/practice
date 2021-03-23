import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sum')
  sum() {
    const data = [1, 2, 3, 4, 5]
    return this.appService.getSum(data)
  }
}
