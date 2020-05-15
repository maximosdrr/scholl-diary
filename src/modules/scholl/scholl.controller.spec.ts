import { Test, TestingModule } from '@nestjs/testing';
import { SchollController } from './scholl.controller';

describe('Scholl Controller', () => {
  let controller: SchollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchollController],
    }).compile();

    controller = module.get<SchollController>(SchollController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
