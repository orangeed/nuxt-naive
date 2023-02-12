import { Test, TestingModule } from '@nestjs/testing';
import { DoseService } from './dose.service';

describe('DoseService', () => {
  let service: DoseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoseService],
    }).compile();

    service = module.get<DoseService>(DoseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
