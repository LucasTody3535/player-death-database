import { Controller } from '@nestjs/common';
import { DeathRecordService } from './death-record.service';

@Controller('death-record')
export class DeathRecordController {
  constructor(private readonly deathRecordService: DeathRecordService) {}
}
