import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { JobPosting, JobPostingDocument } from './job-posting.schema';

import { CreateJobPostingDto } from './dto/create-job-posting.dto';
import { UpdateJobPostingDto } from './dto/update-job-posting.dto';

@Injectable()
export class JobPostingsService {
  constructor(
    @InjectModel(JobPosting.name)
    private model: Model<JobPostingDocument>,
  ) {}

  // CREATE POST
  async create(dto: CreateJobPostingDto) {
    return new this.model(dto).save();
  }

  // GET ALL JOB POST
  async findAll() {
    return this.model.find().sort({ createdAt: -1 });
  }

  // GET ACTIVE JOBS
  async findActive() {
    return this.model.find({ isActive: true }).sort({ createdAt: -1 });
  }

  // GET ONE JOB POST
  async findOne(id: string) {
    const job = await this.model.findById(id);

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    return job;
  }

  // TOGGLE STATUS

  async toggleStatus(id: string) {
    const job = await this.model.findById(id);

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    job.isActive = !job.isActive;

    return job.save();
  }

  // UPDATE JOB POST
  async update(id: string, dto: UpdateJobPostingDto) {
    const updated = await this.model.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException('Job not found');
    }

    return updated;
  }

  // DELETE JOB POST
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Job not found');
    }

    return deleted;
  }
}
