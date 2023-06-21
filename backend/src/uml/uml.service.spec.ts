import { Test, TestingModule } from '@nestjs/testing';
import { UmlService } from './uml.service';

describe('UmlService', () => {
  let service: UmlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UmlService],
    }).compile();

    service = module.get<UmlService>(UmlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
