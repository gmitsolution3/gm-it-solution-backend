import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TSlider = Slider & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class Slider {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  highlight: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  ctaPrimary: string;

  @Prop({ required: true })
  ctaSecondary: string;

  @Prop({ required: true })
  image: string;
}

export const SliderSchema = SchemaFactory.createForClass(Slider);
