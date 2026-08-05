import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly start = Date.now();

  health() {
    return { status: 'ok', uptime: Math.round((Date.now() - this.start) / 1000) };
  }

  info() {
    return {
      app: 'nestjs', version: '1.0.0',
      db: process.env.DATABASE_URL ? 'connected' : 'not-configured',
      env: process.env.NODE_ENV || 'development',
    };
  }
}
