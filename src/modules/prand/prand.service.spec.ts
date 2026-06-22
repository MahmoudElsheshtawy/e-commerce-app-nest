import { Test, TestingModule } from '@nestjs/testing';
import { PrandService } from './prand.service';

describe('PrandService', () => {
  let service: PrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrandService],
    }).compile();

    service = module.get<PrandService>(PrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
