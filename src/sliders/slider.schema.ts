import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SliderDocument = Slider & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class Slider {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  slogan: string;

  @Prop({ required: true })
  ctaOne: string;

  @Prop({ required: true })
  ctaTwo: string;
}

export const SliderSchema = SchemaFactory.createForClass(Slider);
