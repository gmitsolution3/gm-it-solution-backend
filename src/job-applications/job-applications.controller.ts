import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { JobApplicationsService } from './job-applications.service';
import { CreateJobApplicationDto } from './dto/create-job-application.dto';

@Controller('job-applications')
export class JobApplicationsController {
  constructor(private readonly service: JobApplicationsService) {}

  // 🔥 APPLY FOR JOB
  @Post()
  async create(@Body() dto: CreateJobApplicationDto) {
    const data = await this.service.create(dto);

    return {
      success: true,
      message: 'Application submitted successfully',
      data,
    };
  }

  // 🔥 GET ALL APPLICATIONS (Admin)
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return { success: true, data };
  }

  // 🔥 GET APPLICATIONS FOR A JOB
  @Get('job/:jobId')
  async findByJob(@Param('jobId') jobId: string) {
    const data = await this.service.findByJob(jobId);

    return { success: true, data };
  }

  // 🔥 GET ONE APPLICATION
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);

    return { success: true, data };
  }

  // 🔥 DELETE APPLICATION
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);

    return {
      success: true,
      message: 'Application deleted successfully',
      data,
    };
  }
}