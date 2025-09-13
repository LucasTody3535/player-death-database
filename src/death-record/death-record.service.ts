import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeathRecord } from './schemas/death-record.schema';
import { Model } from 'mongoose';
import { CreateDeathRecordDTO } from './dto/create-death-record.dto';

@Injectable()
export class DeathRecordService {
  constructor(
    @InjectModel(DeathRecord.name) private DeathRecordModel: Model<DeathRecord>,
  ) {}

  async save(dto: CreateDeathRecordDTO): Promise<DeathRecord> {
    const entity = new this.DeathRecordModel(dto);
    return entity.save();
  }
}
