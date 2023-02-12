import { Test, TestingModule } from '@nestjs/testing';
import { DoseController } from './dose.controller';

describe('DoseController', () => {
  let controller: DoseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoseController],
    }).compile();

    controller = module.get<DoseController>(DoseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
