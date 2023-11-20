import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './entities/person.entity';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { ServiceModule } from 'src/service/service.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    forwardRef(() => ServiceModule),
  ],
  exports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    PersonService,
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
