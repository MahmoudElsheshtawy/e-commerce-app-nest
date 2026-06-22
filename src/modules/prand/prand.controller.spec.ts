import { Test, TestingModule } from '@nestjs/testing';
import { PrandController } from './prand.controller';
import { PrandService } from './prand.service';

describe('PrandController', () => {
  let controller: PrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrandController],
      providers: [PrandService],
    }).compile();

    controller = module.get<PrandController>(PrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
