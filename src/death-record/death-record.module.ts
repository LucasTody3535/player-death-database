import { Module } from '@nestjs/common';
import { DeathRecordService } from './death-record.service';
import { DeathRecordController } from './death-record.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeathRecord, DeathRecordSchema } from './schemas/death-record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DeathRecord.name,
        schema: DeathRecordSchema,
      },
    ]),
  ],
  controllers: [DeathRecordController],
  providers: [DeathRecordService],
})
export class DeathRecordModule {}
