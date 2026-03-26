import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  JobPosting,
  JobPostingSchema,
} from './job-posting.schema';

import { JobPostingsService } from './job-posting.service';
import { JobPostingsController } from './job-posting.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobPosting.name, schema: JobPostingSchema },
    ]),
  ],
  controllers: [JobPostingsController],
  providers: [JobPostingsService],
})
export class JobPostingsModule {}