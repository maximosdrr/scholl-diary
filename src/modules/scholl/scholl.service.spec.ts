import { Test, TestingModule } from '@nestjs/testing';
import { SchollService } from './scholl.service';

describe('SchollService', () => {
  let service: SchollService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchollService],
    }).compile();

    service = module.get<SchollService>(SchollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
