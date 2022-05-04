import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  findOne(id: number): string {
    console.log(id);
    return 'bibinba';
  }
}
