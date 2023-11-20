import { Body, Controller, Get, Post } from '@nestjs/common';
import { Service } from './entities/service.entity';
import { ServiceService } from './service.service';
import { createServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get()
  async findAll(): Promise<Service[]> {
    return this.serviceService.findAll();
  }

  @Post()
  async create(@Body() createServiceDto: createServiceDto): Promise<Service> {
    return this.serviceService.create(createServiceDto);
  }
}
