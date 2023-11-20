import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  _id: string;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  town: string;

  @Prop()
  age: number;

  @Prop()
  password: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
