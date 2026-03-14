import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TCaseStudy = CaseStudy & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class CaseStudy {
  @Prop({
    type: Types.ObjectId,
    ref: 'Portfolio',
    required: true,
  })
  portfolioId: Types.ObjectId;

  @Prop({ required: true })
  overview: string;

  @Prop({ required: true })
  challenge: string;

  @Prop({ required: true })
  solution: string;

  @Prop({ type: [String], required: true })
  features: string[];

  @Prop({ type: [String], required: true })
  technologies: string[];

  @Prop({ required: true })
  results: string;
}

export const CaseStudySchema = SchemaFactory.createForClass(CaseStudy);
