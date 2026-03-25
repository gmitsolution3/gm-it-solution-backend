import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  LeadershipMessage,
  LeadershipMessageSchema,
} from './leadership-message.schema';

import { LeadershipMessageService } from './leadership-message.service';
import { LeadershipMessageController } from './leadership-message.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LeadershipMessage.name,
        schema: LeadershipMessageSchema,
      },
    ]),
  ],
  controllers: [LeadershipMessageController],
  providers: [LeadershipMessageService],
})
export class LeadershipMessageModule {}
