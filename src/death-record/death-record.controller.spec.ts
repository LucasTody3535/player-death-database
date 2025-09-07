import { Test, TestingModule } from '@nestjs/testing';
import { DeathRecordController } from './death-record.controller';
import { DeathRecordService } from './death-record.service';

describe('DeathRecordController', () => {
  let controller: DeathRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeathRecordController],
      providers: [DeathRecordService],
    }).compile();

    controller = module.get<DeathRecordController>(DeathRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
