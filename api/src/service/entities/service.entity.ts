import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Person } from 'src/person/entities/person.entity';
import * as mongoose from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  available: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  })
  person: Person;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
