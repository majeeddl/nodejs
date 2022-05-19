import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll', () => {
    expect(controller.findAll()).toBe('This action returns all cats');
  });

  it('findOne', async () => {
    expect(await controller.findOne('cat-1')).toBe('Cat id is : cat-1');
  });
});
