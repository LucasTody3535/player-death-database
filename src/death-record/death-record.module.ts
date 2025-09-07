import { Module } from '@nestjs/common';
import { DeathRecordService } from './death-record.service';
import { DeathRecordController } from './death-record.controller';

@Module({
  controllers: [DeathRecordController],
  providers: [DeathRecordService],
})
export class DeathRecordModule {}
