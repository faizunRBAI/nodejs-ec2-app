import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health', () => {
    it('should return status ok', () => {
      const result = appController.health();
      expect(result).toHaveProperty('status', 'ok');
    });
  });

  describe('info', () => {
    it('should return app info', () => {
      const result = appController.info();
      expect(result).toHaveProperty('app');
      expect(result).toHaveProperty('version');
    });
  });

  describe('home', () => {
    it('should return HTML string', () => {
      const result = appController.home();
      expect(typeof result).toBe('string');
      expect(result).toContain('html');
    });
  });
});
