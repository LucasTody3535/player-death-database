import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeathRecordDocument = HydratedDocument<DeathRecord>;

@Schema()
export class DeathRecord {
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
