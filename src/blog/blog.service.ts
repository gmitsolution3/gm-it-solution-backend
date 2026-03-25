import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Blog, BlogDocument } from './blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name)
    private model: Model<BlogDocument>,
  ) {}

  // CREATE NEW BLOG
  async create(dto: CreateBlogDto) {
    return new this.model(dto).save();
  }

  // GET ALL BLOG
  async findAll() {
    return this.model.find().sort({ createdAt: 1 });
  }

  // GET FEATURED BLOG
  async findFeatured() {
    return this.model.find({ featured: true }).sort({ createdAt: -1 });
  }

  // GET ONE BLOG
  async findOne(id: string) {
    const blog = await this.model.findById(id);

    if (!blog) {
      throw new NotFoundException('Blog not found');
    }

    return blog;
  }

  // UPDATE BLOG
  async update(id: string, dto: UpdateBlogDto) {
    const updated = await this.model.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException('Blog not found');
    }

    return updated;
  }

  // DELETE BLOG
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Blog not found');
    }

    return deleted;
  }
}
