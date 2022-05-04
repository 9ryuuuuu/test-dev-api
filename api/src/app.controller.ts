import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(RolesGuard)
  @Get('hoge/:id')
  @Roles(`admin`)
  async getHoge(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findOne(id);
  }
}
