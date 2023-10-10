import { Controller, Get } from '@nestjs/common';

@Controller('v2')
export class AppV2Controller {
  @Get()
  getHello(): string {
    return 'Hello V2 world!';
  }
}
