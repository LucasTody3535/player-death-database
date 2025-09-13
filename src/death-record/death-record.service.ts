import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeathRecord } from './schemas/death-record.schema';
import { Model } from 'mongoose';
import { CreateDeathRecordDTO } from './dto/create-death-record.dto';
import { DeathRecordQuery } from './query/death-record.query';

@Injectable()
export class DeathRecordService {
  constructor(
    @InjectModel(DeathRecord.name) private DeathRecordModel: Model<DeathRecord>,
  ) {}

  async save(dto: CreateDeathRecordDTO): Promise<DeathRecord> {
    const entity = new this.DeathRecordModel(dto);
    return entity.save();
  }

  async getFiltered(query: DeathRecordQuery) {
    return this.DeathRecordModel.aggregate([
      {
        $match: {
          mapName: query.mapName,
          location: query.location,
          hour: { $gte: query.minutes - 60, $lte: query.minutes + 60 },
        },
      },
      {
        $group: {
          _id: '$username',
          doc: { $first: '$$ROOT' },
        },
      },
      {
        $replaceRoot: {
          newRoot: '$doc',
        },
      },
    ]).limit(5);
  }
}
