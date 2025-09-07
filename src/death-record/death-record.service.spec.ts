import { Test, TestingModule } from '@nestjs/testing';
import { DeathRecordService } from './death-record.service';

describe('DeathRecordService', () => {
  let service: DeathRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeathRecordService],
    }).compile();

    service = module.get<DeathRecordService>(DeathRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
