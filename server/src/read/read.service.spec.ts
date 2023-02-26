import { Test, TestingModule } from '@nestjs/testing';
import { ReadService } from './read.service';

describe('ReadService', () => {
  let service: ReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadService],
    }).compile();

    service = module.get<ReadService>(ReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
