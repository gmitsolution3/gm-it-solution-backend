import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CaseStudy, CaseStudySchema } from './case-studies.schema';

import { CaseStudiesService } from './case-studies.service';
import { CaseStudiesController } from './case-studies.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CaseStudy.name, schema: CaseStudySchema },
    ]),
  ],
  controllers: [CaseStudiesController],
  providers: [CaseStudiesService],
})
export class CaseStudiesModule {}
