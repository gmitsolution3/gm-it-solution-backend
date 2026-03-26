import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  JobApplication,
  JobApplicationDocument,
} from './job-applications.schema';

import { CreateJobApplicationDto } from './dto/create-job-application.dto';

@Injectable()
export class JobApplicationsService {
  constructor(
    @InjectModel(JobApplication.name)
    private model: Model<JobApplicationDocument>,
  ) {}

  // 🔥 CREATE
  async create(dto: CreateJobApplicationDto) {
    return new this.model(dto).save();
  }

  // 🔥 GET ALL
  async findAll() {
    return this.model
      .find()
      .populate('jobId', 'title department location')
      .sort({ createdAt: -1 });
  }

  // 🔥 GET ONE
  async findOne(id: string) {
    const application = await this.model
      .findById(id)
      .populate('jobId');

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    return application;
  }

  // 🔥 GET APPLICATIONS FOR A JOB
  async findByJob(jobId: string) {
    return this.model
      .find({ jobId })
      .sort({ createdAt: -1 }).populate("jobId");
  }

  // 🔥 DELETE
  async remove(id: string) { 
    const deleted = await this.model.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Application not found');
    }

    return deleted;
  }
}