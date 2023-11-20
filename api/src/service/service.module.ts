import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Service, ServiceSchema } from './entities/service.entity';
import { PersonModule } from 'src/person/person.module';
import { forwardRef } from '@nestjs/common';
import { ServiceService } from './service.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
        forwardRef(() => PersonModule),
    ],
    exports: [
        MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
        ServiceService,
    ],
    controllers: [ServiceController],
    providers: [ServiceService],
})
export class ServiceModule {}
