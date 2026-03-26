import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type JobApplicationDocument =
  JobApplication & Document;

@Schema({ timestamps: true })
export class JobApplication {
  @Prop({ required: true, trim: true })
  fullName: string;

  @Prop({ required: true, trim: true })
  email: string;

  @Prop({ required: true })
  phone: string;


  @Prop({
    type: Types.ObjectId,
    ref: 'JobPosting',
    required: true,
  })
  jobId: Types.ObjectId;

  @Prop({ required: true })
  coverLetter: string;

  @Prop({ required: true })
  portfolioUrl?: string;

  @Prop({ required: true })
  resume: string;
}

export const JobApplicationSchema =
  SchemaFactory.createForClass(JobApplication);