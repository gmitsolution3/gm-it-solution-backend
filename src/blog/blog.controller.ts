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

import { BlogsService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly service: BlogsService) {}

  // CREATE NEW BLOG
  @Post()
  async create(@Body() dto: CreateBlogDto) {
    const data = await this.service.create(dto);

    return {
      success: true,
      message: 'Blog created successfully',
      data,
    };
  }

  // GET ALL BLOG
  @Get()
  async findAll() {
    const data = await this.service.findAll();

    return {
      success: true,
      data,
    };
  }

  // GET FEATURED BLOG
  @Get('featured')
  async findFeatured() {
    const data = await this.service.findFeatured();

    return {
      success: true,
      data,
    };
  }

  // GET ONE BLOG
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);

    return {
      success: true,
      data,
    };
  }

  // UPDATE BLOG
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBlogDto,
  ) {
    const data = await this.service.update(id, dto);

    return {
      success: true,
      message: 'Blog updated successfully',
      data,
    };
  }

  // DELETE BLOG
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);

    return {
      success: true,
      message: 'Blog deleted successfully',
      data,
    };
  }
}