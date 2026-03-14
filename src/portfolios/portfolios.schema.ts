import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TPortfolio = Portfolio & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class Portfolio {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  url: string;
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
