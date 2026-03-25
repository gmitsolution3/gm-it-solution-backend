import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  LeadershipMessage,
  LeadershipMessageDocument,
} from './leadership-message.schema';

import { CreateLeadershipMessageDto } from './dto/create-leadership-message.dto';
import { UpdateLeadershipMessageDto } from './dto/update-leadership-message.dto';

@Injectable()
export class LeadershipMessageService {
  constructor(
    @InjectModel(LeadershipMessage.name)
    private model: Model<LeadershipMessageDocument>,
  ) {}

  // CREATE NEW LEADER MESSAGE
  async create(dto: CreateLeadershipMessageDto) {
    const exists = await this.model.findOne({ role: dto.role });

    if (exists) {
      throw new ConflictException(
        `${dto.role} message already exists`,
      );
    }

    return new this.model(dto).save();
  }

  // GET ALL LEADER MESSAGE
  async findAll() {
    return this.model.find().sort({ createdAt: -1 });
  }

  // GET LEADER MESSAGE BY ROLE
  async findByRole(role: string) {
    const doc = await this.model.findOne({ role });

    if (!doc) {
      throw new NotFoundException('Message not found');
    }

    return doc;
  }

  // UPDATE LEADER MESSAGE BY ROLE
  async updateByRole(
    role: string,
    dto: UpdateLeadershipMessageDto,
  ) {
    const updated = await this.model.findOneAndUpdate(
      { role },
      dto,
      { new: true, runValidators: true },
    );

    if (!updated) {
      throw new NotFoundException('Message not found');
    }

    return updated;
  }

  // DELETE LEADER MESSAGE BY ROLE
  async removeByRole(role: string) {
    const deleted = await this.model.findOneAndDelete({ role });

    if (!deleted) {
      throw new NotFoundException('Message not found');
    }

    return deleted;
  }
}