import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamMemberDocument = TeamMember & Document;

@Schema({ strict: true, timestamps: true, versionKey: false })
export class TeamMember {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  role: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  linkedin?: string;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
