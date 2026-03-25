import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Blog, BlogSchema } from './blog.schema';
import { BlogsService } from './blog.service';
import { BlogsController } from './blog.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Blog.name, schema: BlogSchema },
    ]),
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}