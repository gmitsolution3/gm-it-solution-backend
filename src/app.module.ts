import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SlidersModule } from './sliders/sliders.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { CaseStudiesModule } from './case-studies/case-studies.module';
import { ServicesModule } from './services/services.module';
import { UploadModule } from './upload/upload.module';
import { LeadershipMessageModule } from './leadership-message/leadership-message.module';
import { TeamMembersModule } from './team-members/team-members.module';
import { BlogsModule } from './blog/blog.module';
import { JobPostingsModule } from './job-posting/job-posting.module';
import { JobApplicationsModule } from './job-applications/job-applications.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('DB_URI'),
      }),
    }),
    SlidersModule,
    PortfoliosModule,
    CaseStudiesModule,
    ServicesModule,
    UploadModule,
    LeadershipMessageModule,
    TeamMembersModule,
    BlogsModule,
    JobPostingsModule,
    JobApplicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
