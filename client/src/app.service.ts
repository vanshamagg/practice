import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE')
    private readonly mathService: ClientProxy
  ) { }
  getHello(): string {
    return 'Hello World!';
  }

  getSum(data: number[]) {
    return this.mathService.send('add', [1, 2, 3, 4])
  }
}
