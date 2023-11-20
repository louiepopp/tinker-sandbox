import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from './entities/person.entity';
import { Model } from 'mongoose';
import { createPersonDto } from './dto/create-person.dto';
import { Service } from 'src/service/entities/service.entity';
import { ServiceService } from 'src/service/service.service';
import * as bcrypt from 'bcrypt';
import { PersonWithEmailExistsException } from './person.exception';

@Injectable()
export class PersonService {
  @Inject(ServiceService)
    private readonly serviceService: ServiceService;

  constructor(@InjectModel(Person.name) private personModel: Model<Person>) {}

  async create(createPersonDto: createPersonDto): Promise<Person> {
      if (await this.getPerson({ email: createPersonDto.email })) {
          throw new PersonWithEmailExistsException();
      }

      const saltOrRounds = 10;
      createPersonDto.password = await bcrypt.hash(
          createPersonDto.password,
          saltOrRounds,
      );

      const createdPerson = new this.personModel(createPersonDto);
      return createdPerson.save();
  }

  async delete(person_id: string) {
      return this.personModel.deleteOne({ _id: person_id });
  }

  async findAll(): Promise<Person[]> {
      return this.personModel.find().exec();
  }

  async getServices(person_id: string): Promise<Service[]> {
      return this.serviceService.findByPersonId(person_id);
  }

  async getPerson(query: object): Promise<Person> {
      return this.personModel.findOne(query);
  }
}
