import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

import { successResponse } from 'utils';

@Controller('services')
export class ServicesController {
  constructor(private readonly service: ServicesService) {}

  // CREATE NEW SERVICE API
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateServiceDto) {
    const data = await this.service.create(dto);

    return successResponse(data, 'Service created successfully');
  }

  // GET ALL SERVICE API
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return successResponse(data, 'Services fetched successfully');
  }

  // GET SERVICE BY ID API
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);

    return successResponse(data, 'Service fetched successfully');
  }

  // UPDATE SERVICE API
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateServiceDto) {
    const data = await this.service.update(id, dto);

    return successResponse(data, 'Service updated successfully');
  }

  // DELETE SERVICE API
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);

    return successResponse(data, 'Service deleted successfully');
  }
}
