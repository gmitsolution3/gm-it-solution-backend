import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  TeamMember,
  TeamMemberDocument,
} from './team-members.schema';

import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';

@Injectable()
export class TeamMembersService {
  constructor(
    @InjectModel(TeamMember.name)
    private model: Model<TeamMemberDocument>,
  ) {}

  // CREATE NEW TEAM MEMBER
  async create(dto: CreateTeamMemberDto) {
    return new this.model(dto).save();
  }

  // GET ALL TEAM MEMBER
  async findAll() {
    return this.model.find().sort({ createdAt: -1 });
  }

  // GET ONE TEAM MEMBER
  async findOne(id: string) {
    const member = await this.model.findById(id);

    if (!member) {
      throw new NotFoundException('Team member not found');
    }

    return member;
  }

  // UPDATE ONE TEAM MEMBER
  async update(id: string, dto: UpdateTeamMemberDto) {
    const updated = await this.model.findByIdAndUpdate(
      id,
      dto,
      { new: true, runValidators: true },
    );

    if (!updated) {
      throw new NotFoundException('Team member not found');
    }

    return updated;
  }

  // DELETE ONE TEAM MEMBER
  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Team member not found');
    }

    return deleted;
  }
}