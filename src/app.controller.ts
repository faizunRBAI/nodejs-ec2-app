import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { WELCOME_HTML } from './welcome';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  home(): string { return WELCOME_HTML; }

  @Get('health')
  health() { return this.appService.health(); }

  @Get('api/info')
  info() { return this.appService.info(); }
}
