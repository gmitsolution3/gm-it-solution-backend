import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeadershipMessageDocument = LeadershipMessage & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class LeadershipMessage {
  
  @Prop({
    required: true,
    enum: ['chairman', 'ceo'],
    unique: true, 
  })
  role: string;

  @Prop({ required: false })
  quote: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  videoUrl: string;
}

export const LeadershipMessageSchema =
  SchemaFactory.createForClass(LeadershipMessage);
