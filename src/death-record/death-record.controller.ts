import { Body, Controller, Post } from '@nestjs/common';
import { DeathRecordService } from './death-record.service';
import { CreateDeathRecordDTO } from './dto/create-death-record.dto';

@Controller('death-record')
export class DeathRecordController {
  constructor(private readonly deathRecordService: DeathRecordService) {}

  @Post()
  public async saveDeathRecord(@Body() dto: CreateDeathRecordDTO) {
    const saved = await this.deathRecordService.save(dto);
    return saved;
  }
}
