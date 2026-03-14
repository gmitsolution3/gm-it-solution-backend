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

import { CaseStudiesService } from './case-studies.service';

import { CreateCaseStudyDto } from './dto/create-case-study.dto';
import { UpdateCaseStudyDto } from './dto/update-case-study.dto';

import { successResponse } from 'utils';

@Controller('case-studies')
export class CaseStudiesController {
  constructor(private readonly service: CaseStudiesService) {}

  // CREATE CASE-STUDY API
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateCaseStudyDto) {
    const data = await this.service.create(dto);

    return successResponse(data, 'Case study created successfully');
  }

  // GET ALL CASE-STUDY API
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return successResponse(data, 'Case studies fetched successfully');
  }

  // GET SINGLE CASE-STUDY API
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);

    return successResponse(data, 'Case studies fetched successfully');
  }

  // UPDATE CASE-STUDY API
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCaseStudyDto) {
    const data = await this.service.update(id, dto);

    return successResponse(data, 'Case study updated successfully');
  }

  // DELETE CASE-STUDY API
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);

    return successResponse(data, 'Case study deleted successfully');
  }
}
