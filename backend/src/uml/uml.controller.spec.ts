import { Test, TestingModule } from '@nestjs/testing';
import { UmlController } from './uml.controller';

describe('UmlController', () => {
  let controller: UmlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UmlController],
    }).compile();

    controller = module.get<UmlController>(UmlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
