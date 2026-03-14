import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceDocument = Service & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class Service {
  @Prop({ required: true, trim: true })
  icon: string;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  features: string[];

  @Prop({ type: [String], required: true })
  technologies: string[];

  @Prop({ required: true })
  image: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
