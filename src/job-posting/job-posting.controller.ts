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

import { JobPostingsService } from './job-posting.service';
import { CreateJobPostingDto } from './dto/create-job-posting.dto';
import { UpdateJobPostingDto } from './dto/update-job-posting.dto';

@Controller('job-postings')
export class JobPostingsController {
  constructor(private readonly service: JobPostingsService) {}

  // CREATE POST
  @Post()
  async create(@Body() dto: CreateJobPostingDto) {
    const data = await this.service.create(dto);

    return {
      success: true,
      message: 'Job created successfully',
      data,
    };
  }

  // GET ALL JOB POST
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return { success: true, data };
  }

  // GET ACTIVE JOBS
  @Get('active')
  async findActive() {
    const data = await this.service.findActive();

    return { success: true, data };
  }

  // GET ONE JOB POST
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);

    return { success: true, data };
  }

  // TOGGLE STATUS
  @Patch(':id/toggle-status')
  async toggleStatus(@Param('id') id: string) {
    const data = await this.service.toggleStatus(id);

    return {
      success: true,
      message: `Job ${
        data.isActive ? 'activated' : 'deactivated'
      } successfully`,
      data,
    };
  }

  // UPDATE JOB POST
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateJobPostingDto) {
    const data = await this.service.update(id, dto);

    return {
      success: true,
      message: 'Job updated successfully',
      data,
    };
  }

  // DELETE JOB POST
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);

    return {
      success: true,
      message: 'Job deleted successfully',
      data,
    };
  }
}
