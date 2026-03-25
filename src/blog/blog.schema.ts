import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class Blog {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  excerpt: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, trim: true })
  category: string;

  @Prop({ required: true, trim: true })
  author: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  readTime: string;

  @Prop({ required: true })
  image: string;

  @Prop({ default: false })
  featured: boolean;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
