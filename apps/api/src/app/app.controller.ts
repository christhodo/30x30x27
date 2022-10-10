import { Controller, Get } from '@nestjs/common';

import { Message } from '@project-angular/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
