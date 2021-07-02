import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('domain')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/:domain')
  postDomain(@Body()body:any ,@Param('domain')domain){
    return this.appService.post(domain,body)
  }
}
