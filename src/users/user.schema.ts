import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'user', timestamps: true })
export class User {
  @Prop({ type: Types.ObjectId, auto: true })
  _id!: Types.ObjectId;

  @Prop({ required: true, trim: true })
  name!: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email!: string;

  @Prop({
    default: false,
  })
  emailVerified!: boolean;

  @Prop({
    default: '',
  })
  image!: string;

  @Prop({
    enum: ['user', 'admin'],
    default: 'user',
  })
  role!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);