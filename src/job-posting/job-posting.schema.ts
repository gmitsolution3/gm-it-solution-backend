import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobPostingDocument = JobPosting & Document;


class SalaryRange {
  @Prop({ required: true })
  min: number;

  @Prop({ required: true })
  max: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  period: string; 
}

@Schema({ timestamps: true })
export class JobPosting {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  employmentType: string;

  @Prop({ required: true })
  workplaceType: string;

  @Prop({ required: true })
  experienceLevel: string;

  @Prop({ required: true })
  experienceRequired: string;

  @Prop({ type: SalaryRange, required: true })
  salaryRange: SalaryRange;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  responsibilities: string[];

  @Prop({ type: [String], required: true })
  requirements: string[];

  @Prop({ type: [String], required: true })
  skills: string[];

  @Prop({ type: [String], required: true })
  benefits: string[];

  @Prop({ required: true })
  applicationDeadline: Date;

  @Prop({ required: true })
  openings: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true })
  contactEmail: string;
}

export const JobPostingSchema =
  SchemaFactory.createForClass(JobPosting);