import { Test, TestingModule } from '@nestjs/testing';
import { ReadController } from './read.controller';
import { ReadService } from './read.service';

describe('ReadController', () => {
  let controller: ReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadController],
      providers: [ReadService],
    }).compile();

    controller = module.get<ReadController>(ReadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
