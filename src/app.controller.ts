import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ayon')
  getRootRoute(): string {
    return 'Ayon Al Mamun'
  }
}
