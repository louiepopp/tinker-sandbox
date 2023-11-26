import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { createPersonDto } from './dto/create-person.dto';
import { Service } from 'src/service/entities/service.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Post()
  async create(@Body() createPersonDto: createPersonDto) {
    this.personService.create(createPersonDto);
  }

  @Get(':id/services')
  async getServices(@Param('id') id: string): Promise<Service[]> {
    return this.personService.getServices(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.personService.delete(id);
  }
}
