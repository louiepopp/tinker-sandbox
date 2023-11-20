import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './entities/service.entity';
import { Model } from 'mongoose';
import { createServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
    constructor(
    @InjectModel(Service.name) private serviceModel: Model<Service>,
    ) {}

    async create(createServiceDto: createServiceDto): Promise<Service> {
        return this.serviceModel.create(createServiceDto);
    }

    async findAll(): Promise<Service[]> {
        return this.serviceModel.find().populate('person').exec();
    }

    async findByPersonId(person_id: string): Promise<Service[]> {
        return this.serviceModel.find({ person: person_id }).exec();
    }
}
