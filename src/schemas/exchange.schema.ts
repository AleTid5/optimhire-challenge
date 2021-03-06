import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExchangeDocument = Exchange & Document;

@Schema()
export class Exchange {
  @Prop()
  lastUpdated: string;

  @Prop()
  value: string;
}

export const ExchangeSchema = SchemaFactory.createForClass(Exchange);
