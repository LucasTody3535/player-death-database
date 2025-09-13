import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateDeathRecordDTO } from '../dto/create-death-record.dto';

export type DeathRecordDocument = HydratedDocument<DeathRecord>;

@Schema()
export class DeathRecord {
  constructor(data: CreateDeathRecordDTO) {
    this.coordinates = data.coordinates;
    this.location = data.location;
    this.hour = data.hour;
    this.username = data.username;
    this.mapName = data.mapName;
  }

  @Prop([Number])
  coordinates: number[];

  @Prop()
  location: string;

  @Prop()
  hour: number;

  @Prop()
  username: string;

  @Prop()
  mapName: string;
}

export const DeathRecordSchema = SchemaFactory.createForClass(DeathRecord);
