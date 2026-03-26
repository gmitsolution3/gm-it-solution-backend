import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  JobApplication,
  JobApplicationSchema,
} from './job-applications.schema';

import { JobApplicationsService } from './job-applications.service';
import { JobApplicationsController } from './job-applications.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: JobApplication.name,
        schema: JobApplicationSchema,
      },
    ]),
  ],
  controllers: [JobApplicationsController],
  providers: [JobApplicationsService],
})
export class JobApplicationsModule {}