import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './user.schema';
import { UpsertUserDto } from './dto/upsert-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private model: Model<UserDocument>,
  ) {}

  async findAll() {
    return this.model.find().sort({ createdAt: -1 });
  }

  // 🔥 UPSERT USER (PATCH)
  async upsert(dto: UpsertUserDto) {
    const user = await this.model.findOneAndUpdate(
      { email: dto.email },
      {
        $set: {
          userName: dto.userName,
        },
        $setOnInsert: {
          role: dto.role || 'user',
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      },
    );

    return user;
  }

  // 🔥 GET USER BY EMAIL
  async findByEmail(email: string) {
    const user = await this.model.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // 🔥 MAKE ADMIN
  async makeAdmin(email: string) {
    const user = await this.model.findOneAndUpdate(
      { email },
      { role: 'admin' },
      { new: true },
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // 🔥 DELETE USER
  async remove(email: string) {
    const deleted = await this.model.findOneAndDelete({ email });

    if (!deleted) {
      throw new NotFoundException('User not found');
    }

    return deleted;
  }
}
