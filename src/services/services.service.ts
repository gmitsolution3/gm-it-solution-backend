import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Service, ServiceDocument } from './service.schema';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name)
    private serviceModel: Model<ServiceDocument>,
  ) {}

  // CREATE NEW SERVICE
  async create(dto: CreateServiceDto): Promise<Service> {
    const service = new this.serviceModel(dto);
    return service.save();
  }

  // FIND ALL SERVICE
  async findAll(): Promise<Service[]> {
    return this.serviceModel.find().sort({ createdAt: 1 });
  }

  // FIND ONE SERVICE
  async findOne(id: string): Promise<Service> {
    const service = await this.serviceModel.findById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  // UPDATE A SERVICE
  async update(_id: string, dto: UpdateServiceDto): Promise<Service> {
    const updated = await this.serviceModel.findByIdAndUpdate(_id, dto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException('Service not found');
    }

    return updated;
  }

  // DELETE A SERVICE
  async remove(_id: string): Promise<Service> {
    const deleted = await this.serviceModel.findByIdAndDelete(_id);

    if (!deleted) {
      throw new NotFoundException('Service not found');
    }

    return deleted;
  }
}
