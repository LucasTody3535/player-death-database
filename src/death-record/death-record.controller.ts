import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeathRecordService } from './death-record.service';
import { CreateDeathRecordDTO } from './dto/create-death-record.dto';
import { DeathRecordQuery } from './query/death-record.query';

@Controller('death-record')
export class DeathRecordController {
  constructor(private readonly deathRecordService: DeathRecordService) {}

  @Post()
  public async saveDeathRecord(@Body() dto: CreateDeathRecordDTO) {
    const saved = await this.deathRecordService.save(dto);
    return saved;
  }

  @Get()
  public async getDeathRecords(@Body() query: DeathRecordQuery) {
    const deathRecords = await this.deathRecordService.getFiltered(query);
    return deathRecords;
  }
}
